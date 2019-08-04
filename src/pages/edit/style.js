import styled from 'styled-components'


export const EditorContainer = styled.div`
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    margin-bottom: 40px;
    background-color: rgb(249, 249, 249);
    box-shadow: 0 2px 8px hsla(0,0%,45.1%,.08);
`

export const EditorHeader = styled.div`
    padding: 20px;
    background-color: rgb(249, 249, 249);
`


export const Title = styled.input.attrs({
    placeholder: "标题"
})`
    position: relative;
    display: block;
    height: 30px;
    width: 100%;
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: 500;
    color: rgb(38, 38, 38);
    border: none; 
    outline-style: none;
    background-color: rgb(249, 249, 249);
`

export const LabelWrapper = styled.div`
    margin-bottom: 20px;

`

export const Label = styled.div`
    display: inline-block;
`

export const LabelItem = styled.div`
    background-color: #ccc;
    padding: 5px;
    border-radius: 4px;
    display: inline-block;
    margin-right: 10px;
    height: 20px;
    span{
        margin-right: 5px;
    }
`

export const LabelInput = styled.input.attrs({
    placeholder: "新标签"
})`
    border: none; 
    outline-style: none;

    background-color: rgb(249, 249, 249);
`


export const SelectArea = styled.div`
    margin-bottom: 20px;
`

export const PubPriItem = styled.div`
    display: inline-block;
    margin-right: 10px;
    
`
export const Private = styled.input.attrs({
    type: "radio",
    name: "ispublic",
    value: "private"
})`

`
export const Public = styled.input.attrs({
    type: "radio",
    name: "ispublic",
    value: "public",
})`

`

export const Save = styled.button`
    position: relative;  
    height: 40px;
    width: 60px;
`