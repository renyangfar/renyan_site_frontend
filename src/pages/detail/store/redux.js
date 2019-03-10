import { fromJS } from 'immutable';
import * as constants from './constants';

const  defaultState = fromJS({
    article: [],
    mode: 'view',
})

export default (state=defaultState, actor) => {
    switch(actor.type){
        case constants.CHANGE_DETAIL:
            return state.set('article', fromJS(actor.data))
        default:
            return state;
    }
}