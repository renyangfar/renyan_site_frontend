import styled from 'styled-components'

export const ViewContainer = styled.div`
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    background: #fff;
    box-shadow: 0 2px 8px hsla(0,0%,45.1%,.08);
`
export const EditorContainer = styled.div`
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    background: #fff;
    box-shadow: 0 2px 8px hsla(0,0%,45.1%,.08);
`

export const Title = styled.input.attrs({
    placeholder: "标题"
})`
    position: relative;
    top: 20px;
    margin: 20px;
    display: block;
    height: 30px;
    width: 500px;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid #aaa; 
    outline-style: none;
    font-size: 15px;
`

export const LabelInput = styled.input.attrs({
    placeholder: "打标签"
})`
    margin: 20px;
`

export const Label = styled.div`
    display: inline-block;
`

export const LabelItem = styled.div`
    display: inline-block;
    margin-right: 10px;
    height: 20px;
    span{
        margin-right: 5px;
    }
`



export const Private = styled.input.attrs({
    type: "radio",
    name: "ispublic",
    value: "public"
})`

`
export const Public = styled.input.attrs({
    type: "radio",
    name: "ispublic",
    value: "public"
})`

`

export const SelectArea = styled.div`
    margin: 20px;
`