import axios from 'axios'
import * as constants from './constants'

const changeHomeData = (data) => ({
    type: constants.GET_CONTENT,
    value: data
})
export const getContent = (page) => {
    return (dispatch) => {
        axios({
            method: 'get',
            url: '/blog/public/articles_list',
            params: {
                page: page
            }
        }).then((res) => {
            const result = res.data;
            if (result.success) {
                dispatch(changeHomeData(result.data))
            } else {
                console.log(result.data);
            }
        }).catch((e) => {
            console.log(e);
        })
    }
}