import React from 'react';
import { connect } from 'react-redux';
import { EditorContainer, EditorHeader, LabelWrapper, Title, Public, Private, LabelInput, Label, LabelItem, SelectArea, PubPriItem } from './style';

import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.min.css';
import 'tui-editor/dist/tui-editor-contents.min.css';
import { Editor } from '@toast-ui/react-editor'


class Edit extends React.PureComponent {
    editorView = (modeView) => {
        return (
            <EditorHeader>
                <Title disabled={modeView ? true : false} value={this.props.title}></Title>
                <LabelWrapper>
                    <Label>
                        {this.props.labels.map((item) => {
                            return (
                                <LabelItem key={item}>
                                    <span>{item}</span>
                                    {modeView ? null : <i>x</i>}

                                </LabelItem>
                            )
                        })}
                    </Label>
                    {modeView ? null :
                        <LabelInput></LabelInput>
                    }
                </LabelWrapper>
                {modeView ? (this.props.isPublish ? <LabelItem>公开</LabelItem> : <LabelItem>私密</LabelItem>) :
                    <SelectArea>
                        <PubPriItem>
                            <label>私密: </label><Private checked="checked"></Private>
                        </PubPriItem>
                        <PubPriItem>
                            <label>公开: </label ><Public></Public>
                        </PubPriItem>
                    </SelectArea>
                }
            </EditorHeader>
        )
    }

    MyComponent = () => (
        <Editor
          initialValue="加载中..."
          previewStyle="vertical"
          width="100%"
          height="800px"
          initialEditType="markdown"
          useCommandShortcut={true}
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
        const {title, body} = this.props
        return (
            <EditorContainer>
                {this.MyComponent()}
                {this.MyComponent.initialValue=body}
            </EditorContainer>
        );
    }
}


const mapState = (state) => ({
    modeView: state.getIn(['detail', 'modeView']),
    title: state.getIn(['detail', 'title']),
    body: state.getIn(['detail', 'body']),
    author: state.getIn(['detail', 'author']),
    created: state.getIn(['detail', 'created']),
    updated: state.getIn(['detail', 'updated']),
    browse_mount: state.getIn(['detail', 'browse_mount']),
    labels: state.getIn(['detail', 'labels']),
    isPublish: state.getIn(['detail', 'isPublish']),
});

const mapDispatch = (dispatch) => ({
});

export default connect(mapState, mapDispatch)(Edit);
