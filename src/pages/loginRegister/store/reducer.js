import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	login: false,
	in_login_page: true
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.CHANGE_VIEW:
			return state.set('in_login_page', action.value);
		default:
			return state;
	}
}