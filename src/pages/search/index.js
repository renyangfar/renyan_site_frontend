import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { actionCreatores } from './store'
import { Link } from 'react-router-dom';
import Highlighter from "react-highlight-words";
import { ArticleWrapper, ContentArea, TextArea, Title, Segment, ImageArea, OtherArea, HrLine, MyHighLight, NoResult} from './style';


class Search extends React.Component {
    componentDidMount() {
        const data = this.props.location.query;
        if (data) {
            const { username, keySearch } = data;
            this.props.getSearch(username, keySearch);
        }
    }

    componentDidUpdate(){
        const data = this.props.location.query;
        this.props.location.query = ''; //以免反复执行
        const { username, keySearch } = data;
        if(keySearch){
            this.props.getSearch(username, keySearch);
        };
    }

    getTextArea(item, tokens) {
        return (
            <Fragment>
                <Title>
                    <Highlighter
                        highlightClassName={MyHighLight}
                        searchWords={tokens}
                        autoEscape={true}
                        textToHighlight={String(item.get('title'))}
                    />,
                                            </Title>
                <Segment>
                    <Highlighter
                        highlightClassName={MyHighLight}
                        searchWords={tokens}
                        autoEscape={true}
                        textToHighlight={String(item.get('body'))}
                    />,
                                           </Segment>
                <OtherArea><Link to=''><img alt='' src=
                    'https://cdn.nlark.com/yuque/0/2019/jpeg/anonymous/1551427285117-f557f584-22d8-4547-841e-4b7f5c20269c.jpeg?x-oss-process=image/resize,m_fill,w_192,h_192/format,png'
                    className='img_head'></img></Link>
                    <span>{item.get('author') + ` 发布于 ` + item.get('created')}</span>
                </OtherArea>
            </Fragment>
        )
    }

    render() {
        const { keySearch, article_list, tokens} = this.props;
        if(article_list.toJS().length === 0){
            return(
                <NoResult>很抱歉，没有找到与“<span>{keySearch}</span>”相关的文章。
                </NoResult>
            )
        }
        return (
            <Fragment>
                {article_list.map((item) => {
                    return (
                        <div key={item.get('title')}>
                            <ArticleWrapper>
                            <Link key={item.get('title')} to={'/detail/' + item.get('_id')} style={{ textDecoration: 'none' }}>
                                {!item.get('img', '') ?
                                    <ContentArea>
                                        <TextArea width="100%">
                                            {this.getTextArea(item, tokens)}
                                        </TextArea>
                                    </ContentArea> :
                                    <ContentArea>
                                        <TextArea width="430px">
                                            {this.getTextArea(item, tokens)}
                                        </TextArea>
                                        <ImageArea>
                                            <img alt='' style={{ width: "100%" }} src={item.get('img')}></img>
                                        </ImageArea>
                                    </ContentArea>

                                }
                                    </Link>
                            </ArticleWrapper>
                            <HrLine></HrLine>
                        </div>
                    )
                })}
            </Fragment>

        )
    }

}

const mapState = (state) => ({
    keySearch: state.getIn(['search', 'keySearch']),
    article_list: state.getIn(['search', 'article_list']),
    tokens: state.getIn(['search', 'tokens'])
})

const mapDispatch = (dispatch) => ({
    getSearch(username, keySearch) {
        dispatch(actionCreatores.getSearch(username, keySearch));
    }
})

export default connect(mapState, mapDispatch)(Search);