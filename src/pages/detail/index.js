import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as homeActionCreators } from '../../pages/home/store';
import { Container, Title, Body } from './style';

import MarkdownIt from 'markdown-it'


class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.mdParser = new MarkdownIt(/* Markdown-it options */)
    }

    render() {
        const { title, body } = this.props
        let html = this.mdParser.render(body)
        return (
            <Container>
                <Title>{title}</Title>
                <Body dangerouslySetInnerHTML={{ __html: html }} />;
      </Container>
        )
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
        this.props.changeLocation('detail');
    }

    componentWillUnmount() {
        this.props.changeLocation('');
    }
}



const mapState = (state) => ({
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
        getDetail(id) {
            dispatch(actionCreators.getDetail(id));
        }
    });


export default connect(mapState, mapDispatch)(Detail);
