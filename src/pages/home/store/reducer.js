import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    articleList: [],
    page: 0,
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.GET_CONTENT:
            if(action.value.length === 0){
                alert("无更多内容")
                return state
            }
            let articleList = state.get('articleList');
            if(action.page === 0){
                articleList = fromJS([]);
            } 
            return state.merge({
                articleList: articleList.concat(fromJS(action.value)),
                page: state.get('page') + 1
            })
        default:
            return state
    }
}