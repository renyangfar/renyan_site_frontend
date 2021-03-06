import styled from 'styled-components';

export const ArticleWrapper = styled.div`
    margin: 0 auto;
    width: 680px;
    height: 180;
    padding: 10px;
    /* overflow:hidden; */
    /* background-color: #eee; */
`
export const ContentArea = styled.div`
    width: 100%;
    height: 160px;
    /* background-color: #111; */

`
export const TextArea = styled.div`
    float: left;
    width: ${(props) => props.width};
    height: 90%;
    overflow: hidden;
    /* background-color: #aaa; */
`
export const Title = styled.h2`
    font-size: 20px;
    font-weight: 500;
    color: rgb(38, 38, 38);
    margin-bottom: 10px;
`
export const Segment = styled.h2`
    font-size: 14px;
    max-height: 80px;
    line-height: 21px;
    color: rgb(89, 89, 89);
    overflow: hidden;
`

export const OtherArea = styled.div`
    /* overflow: hidden; */
    margin-top: 10px;
    height: 20px;
    /* background: #333; */
    .img_head{
        height: 20px;
        width: 20px;
        border-radius: 10px;
        margin-bottom: 0;
        line-height: 20px;
        margin-right: 10px;
    }
    span {
        font-size: 12px;
        line-height: 20px;
        color: rgb(140,140, 140);

    }
`

export const MyHighLight = styled.div`
    display: inline-block;
    font-size: 16px;
    color: red;
    font-weight: bold;
`


export const ImageArea = styled.div`
    float: right;
    width: 220px;
    height: 80%;
    /* background-color: #888; */
`

export const HrLine = styled.hr`
    display: block;
    width: 680px;
    height: 1px;
    border: 0;
    border-top: 1px solid #ddd;
    margin: 10px auto;
    padding: 0;
`

export const LoadMore = styled.div`
    height: 16;
    width: 600px;
    color: rgb(140, 140, 140);
    background-color: #eee; 
    border-radius: 10px;
    padding: 13px;
    text-align: center;
    margin: 50px auto;
    box-shadow: 0 2px 1px 1px #eee;
    cursor: pointer;
    .span {
        line-height: 16px;
    }
`

export const NoResult = styled.div`
    margin: 50px;
    font-size: 25px;
    span{
        color: red;
    }


`