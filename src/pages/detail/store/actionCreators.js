import axios from 'axios';
import * as constants from './constants';


const changeDetail = (data) => ({
	type: constants.CHANGE_DETAIL,
	data
});

export const getDetail = (id) => {
    return (dispatch) => {
        axios({
            method: 'get',
            url: '/blog/user/article',
            params: {
                _id: id
            }
        }).then((res) => {
            res = res.data;
            if (res.success) {
                dispatch(changeDetail(res.data))
            } else {
                console.log(res.data);
            }
        }).catch((e) => {
            console.error(e);
        })
    }
}