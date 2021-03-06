import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	login: false,
	in_login_page: true,
	error_msg: '',
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.CHANGE_VIEW:
			return state.set('in_login_page', action.value);
		case constants.CHANGE_LOGIN:
			localStorage.setItem('login', true);
			return state.set('login', action.value).set('error_msg', '');
		case constants.ERROR_MSG:
			return state.set('error_msg', action.value);
		case constants.LOGOUT:
			localStorage.setItem('login', false)
			return state.set('login', action.value)
		case constants.SET_LOGIN_STAT:
			return state.set('login', action.value)
		default:
			return state;
	}
}