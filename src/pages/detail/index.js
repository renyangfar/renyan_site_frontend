import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { EditorContainer, EditorHeader, LabelWrapper, Title, Public, Private, LabelInput, Label, LabelItem, SelectArea, PubPriItem } from './style';



class Detail extends React.PureComponent {


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

    render() {
        const { modeView } = this.props;
        return (
            <EditorContainer>
                {this.editorView(modeView)}
            </EditorContainer>
        );
    }

    componentDidMount() {
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
