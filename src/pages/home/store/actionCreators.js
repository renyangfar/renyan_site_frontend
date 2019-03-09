import axios from 'axios'
import * as constants from './constants'

const changeHomeData = (data, page) => ({
    type: constants.GET_CONTENT,
    value: data,
    page: page
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
                dispatch(changeHomeData(result.data, page))
            } else {
                console.log(result.data);
            }
        }).catch((e) => {
            console.error(e);
        })
    }
}