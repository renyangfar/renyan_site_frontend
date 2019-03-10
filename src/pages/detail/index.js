import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { ViewContainer, EditorContainer, Title, Public, Private, LabelInput, Label, LabelItem, SelectArea } from './style';
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

    render() {
        const { mode } = this.props;
        if (this.myCodeMirror) {
            // this.myCodeMirror.setValue("hello world");
            this.myCodeMirror.setValue(this.props.article.get('body'));
        }

        return (
            <Fragment>
                {mode === 'view' ?
                    <ViewContainer>
                        <textarea readonly="readonly" id={editorId} />
                    </ViewContainer> :
                    <EditorContainer>
                        <Title></Title>
                        <LabelInput></LabelInput>
                        <Label>
                            <LabelItem>
                                <span>kafak</span>
                                <i>x</i>
                            </LabelItem>
                            <LabelItem>
                                <span>es</span>
                                <i>x</i>
                            </LabelItem>
                        </Label>
                        <SelectArea>
                            <label>私密: </label><Private></Private>
                            <label>公开: </label><Public></Public>
                        </SelectArea>
                        <textarea id={editorId} />
                    </EditorContainer>
                }
            </Fragment>
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
    mode: state.getIn(['detail', 'mode']),
    article: state.getIn(['detail', 'article']),
});

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id));
    }
});

export default connect(mapState, mapDispatch)(Detail);
