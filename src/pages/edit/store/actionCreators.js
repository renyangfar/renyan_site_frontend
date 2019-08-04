import axios from 'axios';
import * as constants from './constants';

export const save_article = (article) => {
    return (dispatch) => {
        axios({
            method: 'put',
            url: '/blog/user/article',
            data: article
        }).then((res) => {
            res = res.data;
            console.warn(res)
            if (res.success) {
                window.alert("保存成功")
            } else {
                window.alert("保存失败")
                console.log(res.data);
            }
        }).catch((e) => {
            console.error(e);
        })
    }
}