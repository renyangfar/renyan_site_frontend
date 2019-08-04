import axios from 'axios'
import * as constants from './constants'

const changeHomeData = (data, page) => ({
    type: constants.GET_CONTENT,
    value: data,
    page: page
})

const changeLocationState = (location) => ({
    type: constants.CHANGE_LOCATION,
    location: location
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

export const changeLocation = (location) => {
    return (dispatch) => {
        dispatch(changeLocationState(location))
    }
}