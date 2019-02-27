import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
	LoginRegisterWrapper, Header, LoginHeader, RegisterHeader, Indicator,
	SayHello, FormWrapper, UserName, Passwd, Commit, Forget
} from './style';
import { actionCreators } from './store';

class LoginRegister extends PureComponent {
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
					<SayHello>
						Hello
					</SayHello>
					<FormWrapper>
						<UserName className='input' placeholder='用户名'></UserName>
						<Passwd type='password' className='input' placeholder='密码'></Passwd>
						<Commit>登录</Commit>
						<Forget>忘记密码?</Forget>
					</FormWrapper>
				</LoginRegisterWrapper>
			)
		} else {
			return <Redirect to='/' />
		}
	}
}

const mapState = (state) => ({
	loginStatus: state.getIn(['loginRegister', 'login']),
	in_login_page: state.getIn(['loginRegister','in_login_page']),
})

const mapDispatch = (dispatch) => ({
	handleClick(in_login_page) {
		dispatch(actionCreators.handleChangeView(in_login_page));
	}
})

export default connect(mapState, mapDispatch)(LoginRegister);