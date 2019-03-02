import styled from 'styled-components';

export const ArticleWrapper = styled.div`
    margin: 0 auto;
    width: 680px;
    height: 180;
    padding: 10px;
    overflow:hidden;
    /* background-color: #eee; */
`
export const TextArea = styled.div`
    float: left;
    width: 430px;
    height: 90%;
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
    line-height: 21px;
    color: rgb(89, 89, 89);
`
export const ImageArea = styled.div`
    float: right;
    width: 220px;
    height: 80%;
    /* background-color: #888; */
`
export const OtherArea = styled.div`
    overflow: hidden;
    width: 100%;
    height: 10%;
    font-size: 16px;
    /* background: #333; */
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