import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    articleList: [],
    page: 0,
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.GET_CONTENT:
            return state.merge({
                articleList: state.get('articleList').concat(fromJS(action.value)),
                page: state.get('page') + 1
            })
        default:
            return state
    }
}