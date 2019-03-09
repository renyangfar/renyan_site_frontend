import axios from "axios";
import { GET_SEARCH } from './constants'

const handleChange = (tokens, data, keySearch) => ({
    type: GET_SEARCH,
    value: data,
    keySearch: keySearch,
    tokens: tokens,
})


export const getSearch = (username, keySearch) => {
    return (dispatch) => {
        axios({
            method: 'get',
            url: '/blog/user/articles_list',
            params: {
                username: username,
                search_key: keySearch
            }

        }).then((res) => {
            res = res.data;
            if (res.success) {
                dispatch(handleChange(res.tokens, res.data, keySearch))
            } else {
                console.warn(res.data)
            }
        }).catch((e) => {
            console.error(e);
        })
    }
} 