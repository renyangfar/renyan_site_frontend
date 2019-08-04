import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { actionCreators as homeActionCreators } from '../../pages/home/store';
import { actionCreators } from './store'
import { EditorContainer, EditorHeader, LabelWrapper, Title, Public, Private, LabelInput, Label, LabelItem, SelectArea, PubPriItem, Save } from './style';

import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.min.css';
import 'tui-editor/dist/tui-editor-contents.min.css';
import { Editor } from '@toast-ui/react-editor'


class Edit extends React.PureComponent {
    editorRef = React.createRef();
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
                    <Save onClick={()=>this.save_article()}>保存</Save>
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

    MyComponent = () => (
        <Editor
          initialValue="加载中..."
          previewStyle="vertical"
          width="100%"
          height="800px"
          initialEditType="markdown"
          useCommandShortcut={true}
          usageStatistics={false} 
          ref={this.editorRef}
          exts={[
            {
              name: 'chart',
              minWidth: 100,
              maxWidth: 600,
              minHeight: 100,
              maxHeight: 300
            },
            'scrollSync',
            'colorSyntax',
            'uml',
            'mark',
            'table'
          ]}
        />
      );


    render() {
        return (
            <Fragment>
            <EditorContainer>
                {this.editorView()}
                {this.MyComponent()}
            </EditorContainer>
            </Fragment>
        );
    }

    componentDidMount() {
        this.props.changeLocation('edit');
        this.editorRef.current.getInstance().setValue(this.props.body)
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
