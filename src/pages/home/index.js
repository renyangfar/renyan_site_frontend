import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ArticleWrapper, ContentArea, TextArea, Title, Segment, ImageArea, OtherArea, HrLine, LoadMore } from './style';
import { actionCreators } from './store/'


class Home extends PureComponent {

    componentDidMount() {
        this.props.getContent();
    }

    getOtherArea(item) {
        return (
            <OtherArea><Link to=''><img alt='' src=
                'https://cdn.nlark.com/yuque/0/2019/jpeg/anonymous/1551427285117-f557f584-22d8-4547-841e-4b7f5c20269c.jpeg?x-oss-process=image/resize,m_fill,w_192,h_192/format,png'
                className='img_head'></img></Link>
                <span>{item.get('author') + ` 发布于 ` + item.get('created')}</span>
            </OtherArea>
        )
    }

    render() {
        const { page, articleList, getContent } = this.props;
        return (
            <Fragment>
                {articleList.map((item) => {
                    return (
                        <div key={item.get('title')}>
                            <ArticleWrapper>
                                {!item.get('img', '') ?
                                    <ContentArea>
                                        <TextArea width="100%">
                                            <Title>{item.get('title')}</Title>
                                            <Segment>{item.get('body')}</Segment>
                                            {this.getOtherArea(item)}
                                        </TextArea>
                                    </ContentArea> :
                                    <ContentArea>
                                        <TextArea width="430px">
                                            <Title>{item.get('title')}</Title>
                                            <Segment>{item.get('body')}</Segment>
                                            {this.getOtherArea(item)}
                                        </TextArea>
                                        <ImageArea>
                                            <img alt='' style={{ width: "100%" }} src={item.get('img')}></img>
                                        </ImageArea>
                                    </ContentArea>
                                }

                            </ArticleWrapper>
                            <HrLine></HrLine>
                        </div>
                    )
                })}
                <LoadMore onClick={() => getContent(page)}><span>查看更多</span></LoadMore>
            </Fragment>

        )
    }

}

const mapState = (state) => ({
    articleList: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'page']),
})

const mapDispatch = (dispatch) => ({
    getContent(page = 0) {
        dispatch(actionCreators.getContent(page));
    }
})

export default connect(mapState, mapDispatch)(Home);