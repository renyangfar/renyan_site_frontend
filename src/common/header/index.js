import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { HeaderWrapper, Logo, SearchWrapper, Blog, Login, Me } from './style';
import { actionCreators as loginRegisterActionCreators } from '../../pages/loginRegister/store';

class Header extends Component {

	render() {
		const { login } = this.props;
		return (
			<Fragment>
				<HeaderWrapper>
					<Link to='/'>
						<Logo></Logo>
					</Link>
					<SearchWrapper onKeyDown={(e) => this.props.handleKeyDown(e)}>
					</SearchWrapper>
					<Blog>我的博客</Blog>
					<Me>我的</Me>
					<Link to='/loginRegister'>
						{login ? <Login onClick={this.props.logout}>退出</Login> :
							<Login>登录</Login>}
					</Link>
				</HeaderWrapper>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		login: state.get('loginRegister').get('login')
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		handleKeyDown(e) {
			if (e.keyCode === 13) {
				console.log('执行搜索');
			}
		},
		logout() {
			dispatch(loginRegisterActionCreators.logout())
		}

	}
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
