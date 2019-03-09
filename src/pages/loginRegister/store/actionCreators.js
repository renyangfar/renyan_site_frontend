import axios from 'axios';
import * as constants from './constants';

const changeLogin = () => ({
	type: constants.CHANGE_LOGIN,
	value: true
})

export const logout = () => ({
	type: constants.LOGOUT,
	value: false
})

export const displayError = (data) => ({
	type: constants.ERROR_MSG,
	value: data
})

export const handleChangeView = (in_login_page) => {
	return (dispatch) => {
		dispatch(({
			type: constants.CHANGE_VIEW,
			value: in_login_page
		}))
	}
}

export const setLoginStat = (login) => {
	return (dispatch) => {
		dispatch(({
			type: constants.SET_LOGIN_STAT,
			value: login
		}))
	}
}

export const register = (username, password, password_confirm, email) => {
	return (dispatch) => {
		const req_data = { username: username, password: password, password_confirm: password_confirm, email: email }
		var bodyFormData = new FormData();
		for (const [key, value] of Object.entries(req_data)) {
			bodyFormData.set(key, value);
		  }
		axios({
			method: 'post',
			url: '/user/register',
			data: bodyFormData,
			config: { headers: { 'Content-Type': 'multipart/form-data' } }
		})
			.then((res) => {
				const result = res.data
				if (result.success) {
					dispatch(changeLogin())
				} else {
					dispatch(displayError(result.data))					
				}
			})
	}
}

export const login = (username, password) => {
	return (dispatch) => {
		const req_data = { username: username, password: password}
		var bodyFormData = new FormData();
		for (const [key, value] of Object.entries(req_data)) {
			bodyFormData.set(key, value);
		  }
		axios({
			method: 'post',
			url: '/user/login',
			data: bodyFormData,
			config: { headers: { 'Content-Type': 'multipart/form-data' } }
		})
			.then((res) => {
				const result = res.data
				if (result.success) {
					dispatch(changeLogin())
				} else {
					dispatch(displayError(result.data))					
				}
			})
	}
}
