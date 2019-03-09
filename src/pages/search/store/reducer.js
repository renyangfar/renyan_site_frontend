import { fromJS } from "immutable";
import { GET_SEARCH } from "./constants";

const defaultState = fromJS({
    keySearch: '',
    tokens: [],
    article_list: []
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_SEARCH:
            return state.set('article_list', fromJS(action.value)).set('keySearch', action.keySearch).set('tokens', action.tokens);
        default:
            return state;
    }

}