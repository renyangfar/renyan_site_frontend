import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux';
import { ArticleWrapper, TextArea, Title, Segment, ImageArea, OtherArea, HrLine } from './style';



class Home extends PureComponent {


    render() {
        return (
            <Fragment>
                <ArticleWrapper>
                    <TextArea>
                        <Title>前端的未来</Title>
                        <Segment>近期学到一个词：Digital Twin(数字孪生)，简单来讲就是在计算机世界给现实世界的物体（飞船/城市）、系统（电力/交通）建立数字化镜像，让数字世界和物理世界更好地交互，数字大屏也可以算这种技术一种应用场景。
                   </Segment>
                    </TextArea>
                    <ImageArea>
                        <img style={{ width: "100%" }} src="https://cdn.nlark.com/yuque/0/2019/png/84141/1551232435806-ee877313-dbc0-4201-891b-98dbc98c49c4.png?x-oss-process=image/resize,m_fill,h_268,w_392"></img>
                    </ImageArea>
                    <OtherArea>
                        <p>413 颗稻谷2019-03-02 21:09</p>
                    </OtherArea>
                </ArticleWrapper>
                <HrLine></HrLine>
                <ArticleWrapper>
                    <TextArea>
                        <Title>前端的未来</Title>
                        <Segment>近期学到一个词：Digital Twin(数字孪生)，简单来讲就是在计算机世界给现实世界的物体（飞船/城市）、系统（电力/交通）建立数字化镜像，让数字世界和物理世界更好地交互，数字大屏也可以算这种技术一种应用场景。
                   </Segment>
                    </TextArea>
                    <ImageArea>
                        <img style={{ width: "100%" }} src="https://cdn.nlark.com/yuque/0/2019/png/84141/1551232435806-ee877313-dbc0-4201-891b-98dbc98c49c4.png?x-oss-process=image/resize,m_fill,h_268,w_392"></img>
                    </ImageArea>
                    <OtherArea>
                        <p>413 颗稻谷2019-03-02 21:09</p>
                    </OtherArea>
                </ArticleWrapper>
                <HrLine></HrLine>
            </Fragment>
            
        )
    }

}

const mapDispatch = (dispatch) => ({
})

const mapState = (state) => ({
})
export default connect(mapState, mapDispatch)(Home);