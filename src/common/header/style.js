import styled from 'styled-components'



export const HeaderWrapper = styled.header`
    position: relative;
    top: 0px;
    width: 1024px;
    height: 60px;
    margin-bottom: 80px;
    box-shadow: rgba(0,0,0, 0.05) 2px 2px 2px 1px;
    color: #009688;
`

export const Logo = styled.img`
    position: absolute;
    width: 80px;
    height: 60px;
    left: 20px;
    cursor: pointer;
`;

export const SearchWrapper = styled.input.attrs({
    placeholder: '搜索'
})`
    position: absolute;
    left: 350px;
    bottom:5px;
    width: 200px;
    height: 30px;
    border-left: none;
    border-right: none;
    border-top: none;
    outline: none;
    font-size: 15px;
;
`

export const Blog = styled.span`
    position: absolute;
    left: 650px;
    font-size: 16px;
    line-height: 60px;
    cursor: pointer;
`



export const Login = styled.div`
    position: absolute;
    left: 850px;
    font-size: 16px;
    line-height: 60px;
    cursor: pointer;
    color: #009688;
    &:active {
        color: rgb(89, 89, 89);
    }
`

export const Me = styled.div`
    position: absolute;
    left: 950px;
    font-size: 16px;
    line-height: 60px;
    cursor: pointer;
`


