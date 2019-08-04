import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { actionCreators as homeActionCreators } from '../../pages/home/store';
import { actionCreators } from './store'
import { EditorContainer, EditorHeader, LabelWrapper, Title, Public, Private, LabelInput, Label, LabelItem, SelectArea, PubPriItem, Save } from './style';

class Edit extends React.PureComponent {

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

    render() {
        return (
            <EditorContainer>
                {this.editorView()}
            </EditorContainer>
        )
    }

    componentDidMount() {
        this.props.changeLocation('edit');
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
