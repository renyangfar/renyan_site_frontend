import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { actionCreators as homeActionCreators } from '../../pages/home/store';
import { actionCreators } from './store'
import { EditorContainer, EditorHeader, LabelWrapper, Title, Public, Private, LabelInput, Label, LabelItem, SelectArea, PubPriItem, Save } from './style';

import MdEditor from 'react-markdown-editor-lite'
import MarkdownIt from 'markdown-it'
import emoji from 'markdown-it-emoji'
import subscript from 'markdown-it-sub'
import superscript from 'markdown-it-sup'
import footnote from 'markdown-it-footnote'
import deflist from 'markdown-it-deflist'
import abbreviation from 'markdown-it-abbr'
import insert from 'markdown-it-ins'
import mark from 'markdown-it-mark'
import tasklists from 'markdown-it-task-lists'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-light.css'
// import 'highlight.js/styles/github.css'
import './index.less';

class Edit extends React.PureComponent {
    mdEditor = null
    mdParser = null
    constructor(props) {
      super(props)
      // initial a parser
      this.mdParser = new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true,
        highlight: function (str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return hljs.highlight(lang, str).value
            } catch (__) {}
          }    
          return '' // use external default escaping
        }
      })
      .use(emoji)
      .use(subscript)
      .use(superscript)
      .use(footnote)
      .use(deflist)
      .use(abbreviation)
      .use(insert)
      .use(mark)
      .use(tasklists, { enabled: this.taskLists })
      this.renderHTML = this.renderHTML.bind(this)
    }
    handleEditorChange({html, md}) {
    //   console.log('handleEditorChange', html, md)
    }
    handleImageUpload(file, callback) {
      const reader = new FileReader()
      reader.onload = () => {      
        const convertBase64UrlToBlob = (urlData) => {  
          let arr = urlData.split(','), mime = arr[0].match(/:(.*?);/)[1]
          let bstr = atob(arr[1])
          let n = bstr.length
          let u8arr = new Uint8Array(n)
          while (n--) {
            u8arr[n] = bstr.charCodeAt(n)
          }
          return new Blob([u8arr], {type:mime})
        }
        const blob = convertBase64UrlToBlob(reader.result)
        setTimeout(() => {
          // setTimeout 模拟异步上传图片
          // 当异步上传获取图片地址后，执行calback回调（参数为imageUrl字符串），即可将图片地址写入markdown
          callback('https://avatars0.githubusercontent.com/u/21263805?s=40&v=4')
        }, 1000)
      }
      reader.readAsDataURL(file)
    }
    renderHTML(text) {
      // 模拟异步渲染Markdown
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(this.mdParser.render(text))
        }, 1000)
      })
    }
    handleGetMdValue = () => {   
      this.mdEditor && alert(this.mdEditor.getMdValue())      
    }
    handleGetHtmlValue = () => {    
      this.mdEditor && alert(this.mdEditor.getHtmlValue())
    }
    render() {
        const {body} = this.props
      return (      
          <EditorContainer>
            <MdEditor 
              ref={node => this.mdEditor = node}
              value={body}
              style={{height: '800px'}}
              renderHTML={this.renderHTML}
              config={{
                view: {
                  menu: true,
                //   md: true,
                  html: true
                },
                imageUrl: 'https://octodex.github.com/images/minion.png'
              }}
              onChange={this.handleEditorChange} 
              onImageUpload={this.handleImageUpload}
            />
          </EditorContainer>                        
      )
    }

    componentDidMount() {
        this.props.changeLocation('edit');
    }

    editorView = () => {
        return (
            <EditorHeader>
                <Title defaultValue={this.props.title} ref={(input) => { this.titleInput = input }}></Title>
                <LabelWrapper>
                    <Label>
                        {this.props.labels.map((item) => {
                            return (
                                <LabelItem key={item}>
                                    <span>{item}</span>
                                    {<i>x</i>}

                                </LabelItem>
                            )
                        })}
                    </Label>
                    <LabelInput ref={(input) => { this.lableInput = input }}></LabelInput>
                </LabelWrapper>
                <SelectArea>
                    <PubPriItem ref={(input) => { this.isPublish = input }}>
                        <label>私密: </label><Private defaultChecked></Private>
                    </PubPriItem>
                    <PubPriItem>
                        <label>公开: </label ><Public></Public>
                    </PubPriItem>
                </SelectArea>
                <Save onClick={() => this.save_article()}>保存</Save>
            </EditorHeader>
        )
    }

    save_article = () => {

        let body = this.editorRef.current.getInstance().getValue();
        let article = JSON.parse(JSON.stringify(this.props.detail))
        article["title"] = this.titleInput.value;
        article["body"] = body;
        console.table(article);
        this.props.post_article(article)
    }
  }



const mapState = (state) => ({
    detail: state.get('detail'),
    title: state.getIn(['detail', 'title']),
    body: state.getIn(['detail', 'body']),
    author: state.getIn(['detail', 'author']),
    created: state.getIn(['detail', 'created']),
    updated: state.getIn(['detail', 'updated']),
    browse_mount: state.getIn(['detail', 'browse_mount']),
    labels: state.getIn(['detail', 'labels']),
    isPublish: state.getIn(['detail', 'isPublish']),
});


const mapDispatch = (dispatch) => (
    {
        changeLocation(location) {
            dispatch(homeActionCreators.changeLocation(location))
        },
        post_article(article) {
            dispatch(actionCreators.save_article(article))
        }
    });

export default connect(mapState, mapDispatch)(Edit);
