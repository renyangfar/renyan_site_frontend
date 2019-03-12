import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { EditorContainer, EditorHeader, LabelWrapper, Title, Public, Private, LabelInput, Label, LabelItem, SelectArea, PubPriItem } from './style';
import * as HyperMD from 'hypermd';



const editorId = 'renyan';

class Detail extends React.PureComponent {

    // componentDidUpdate() {
    //     if (this.myCodeMirror) {
    //       const value = this.myCodeMirror.getValue();
    //       if (this.props.article.get('body') !== value) {
    //         this.myCodeMirror.setValue(data.data);
    //       }
    //     }
    //   }


    editorView = (modeView) => {

        return (
            <EditorHeader>
                <Title disabled={modeView ? true : false} value={this.props.title}></Title>
                <LabelWrapper>
                    <Label>
                        {this.props.labels.map((item) => {
                            return (
                                <LabelItem>
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

    render() {
        const { modeView } = this.props;
        if (this.myCodeMirror) {
            this.myCodeMirror.setValue(this.props.body);
            if(modeView){
                this.myCodeMirror.setOption('readOnly', true);
            }
        }
        return (
            <EditorContainer>
                {this.editorView(modeView)}
                <textarea id={editorId} />
            </EditorContainer>
        );
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);

        let myTextarea = document.getElementById(editorId);
        this.myCodeMirror = HyperMD.fromTextArea(myTextarea, {
            lineNumbers: !!this.props.showLineNumber,
            hmdModeLoader: false
        });
        this.myCodeMirror.setSize(1020, 900);
        this.myCodeMirror.on('change', (editor) => {
            console.log(editor.getValue());
        });
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
    getDetail(id) {
        dispatch(actionCreators.getDetail(id));
    }
});

export default connect(mapState, mapDispatch)(Detail);
