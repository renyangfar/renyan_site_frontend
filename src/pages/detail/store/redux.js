import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    modeView: true,
    title: '',
    body: '',
    author: '',
    created: '',
    updated: '',
    browse_mount: 0,
    labels: [],
    isPublish: true,
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_DETAIL:
            const data = action.data;
            return state.merge({
                title: data.title,
                body: data.body,
                author: data.author,
                created: data.created,
                updated: data.updated,
                browse_mount: data.browse_mount,
                labels: fromJS(data.labels),
                isPublish: data.isPublish,
            })
        default:
            return state;
    }
}