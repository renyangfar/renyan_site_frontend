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

    headerView = () => {
        return (<ViewContainer>
            headerview
            </ViewContainer>
        )
    }

    editorView = () => {
        return (
            <Fragment>
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
            </Fragment>
        )
    }

    render() {
        const { mode } = this.props;
        if (this.myCodeMirror) {
            this.myCodeMirror.setValue(this.props.article.get('body'));
        }



        return (
            <EditorContainer>
                {mode === 'view' ?
                    this.headerView() :
                    this.editorView()}
                <textarea id={editorId} />
                }
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
    mode: state.getIn(['detail', 'mode']),
    article: state.getIn(['detail', 'article']),
});

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id));
    }
});

export default connect(mapState, mapDispatch)(Detail);
