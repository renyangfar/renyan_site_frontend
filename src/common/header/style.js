import styled from 'styled-components'

import logoPic from '../../statics/logo.png'


export const HeaderWrapper = styled.div`
    width: 100%;
    height: 60px;
    box-shadow: rgba(0,0,0, 0.05) 0px 1px 2px 1px;
    color: rgb(89, 89, 89);
    margin-bottom: 80px;
`

export const Logo = styled.div`
    position: absolute;
    top: 0;
    display: block;
    width: 80px;
    height: 60px;
    left: 32%;
    background: url(${logoPic});   
    background-size: contain;
    cursor: pointer;
`;

export const SearchWrapper = styled.input.attrs({
    placeholder: '搜索'
})`
    position: absolute;
    width: 200px;
    height: 30px;
    left: 40%;
    top: 15px;
    border-left: none;
    border-right: none;
    border-top: none;
    outline: none;
    font-size: 15px;
;
`

export const Blog = styled.div`
    position: absolute;
    left: 58%;
    font-size: 16px;
    line-height: 60px;
    margin-left: 20px;
    margin-right: 20px;
    cursor: pointer;
`



export const Login = styled.div`
    float: right;
    font-size: 16px;
    line-height: 60px;
    cursor: pointer;
`

export const Me = styled.div`
    float: right;
    font-size: 16px;
    line-height: 60px;
    margin-left: 20px;
    margin-right: 20px;
    cursor: pointer;
`


