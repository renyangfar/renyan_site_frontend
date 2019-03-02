import React, { PureComponent, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
	LoginRegisterWrapper, Header, LoginHeader, RegisterHeader, Indicator,
	SayHello, FormWrapper, UserName, Passwd, Commit, Forget, ErrorMsg
} from './style';
import { actionCreators } from './store';



class LoginRegister extends PureComponent {

	loginView = () => {
		return (
			<Fragment>
				<SayHello>Hello</SayHello>
				<FormWrapper>
					<UserName className='input' placeholder='用户名' ref={(input) => { this.username = input }} />
					<Passwd type='password' className='input' placeholder='密码' ref={(input) => { this.passwd = input }} />
					<Commit onClick={() => this.props.handleLogin(this.username, this.passwd)}>登录</Commit>
					<Forget>忘记密码?</Forget>
					{!this.props.error_msg ? null : <ErrorMsg>{this.props.error_msg}</ErrorMsg>}
				</FormWrapper>
			</Fragment>
		)
	}

	registerView = () => {
		return (
			<Fragment>
				<SayHello>Welcome</SayHello>
				<FormWrapper>
					<UserName className='input' placeholder='用户名' ref={(input) => { this.username = input }}></UserName>
					<Passwd type='password' className='input' placeholder='密码' ref={(input) => { this.passwd = input }}></Passwd>
					<Passwd type='password' className='input' placeholder='确认密码' ref={(input) => { this.passwd_confirm = input }}></Passwd>
					<Passwd type='email' className='input' placeholder='邮箱' ref={(input) => { this.email = input }}></Passwd>
					<Commit onClick={() => this.props.handleRegister(this.username, this.passwd, this.passwd_confirm, this.email)}>注册</Commit>
					{!this.props.error_msg ? null : <ErrorMsg>{this.props.error_msg}</ErrorMsg>}
				</FormWrapper>
			</Fragment>
		)
	}

	render() {
		const { loginStatus, in_login_page, handleClick } = this.props;
		if (!loginStatus) {
			return (
				<LoginRegisterWrapper>
					<Header>
						<LoginHeader onClick={() => handleClick(true)}><span className='header_span'>登录</span></LoginHeader>
						<RegisterHeader onClick={() => handleClick(false)}><span className='header_span'>注册</span></RegisterHeader>
						<Indicator distance={in_login_page ? 0 : 200}></Indicator>
					</Header>
					{in_login_page ? this.loginView() : this.registerView()}

				</LoginRegisterWrapper>
			)
		} else {
			return <Redirect to='/' />
		}
	}
}

const mapState = (state) => ({
	loginStatus: state.getIn(['loginRegister', 'login']),
	in_login_page: state.getIn(['loginRegister', 'in_login_page']),
	error_msg: state.getIn(['loginRegister', 'error_msg'])
})

const mapDispatch = (dispatch) => ({
	handleClick(in_login_page) {
		dispatch(actionCreators.handleChangeView(in_login_page));
	},
	handleRegister(username, passwd, passwd_confirm, email) {
		dispatch(actionCreators.register(username.value, passwd.value, passwd_confirm.value, email.value));
	},
	handleLogin(username, passwd) {
		dispatch(actionCreators.login(username.value, passwd.value));
	}
})

export default connect(mapState, mapDispatch)(LoginRegister);