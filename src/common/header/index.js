import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { HeaderWrapper, Logo, SearchWrapper, Blog, Login, Me, EditButton, SaveButton } from './style';
import { actionCreators as loginRegisterActionCreators } from '../../pages/loginRegister/store';
import logoPic from '../../statics/head.png'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';


class Header extends Component {

	handleKeyDown = (e, keySearch) => {
		if (e.keyCode === 13 && keySearch.value.length > 0) {
			var data = { username: '', keySearch: keySearch.value };
			var path = {
				pathname: '/search',
				query: data,
			}
			this.props.history.push(path);
		}
	}

	componentDidMount() {
		let login = localStorage.getItem('login', false);
		if(login==='true'){
			login=true;
		}else{
			login=false;
		}
		this.props.setLoginStat(login);
	}



	render() {
		const { login, location } = this.props;
		return (
			<Fragment>
				<HeaderWrapper>
					<Link to='/'>
						<Logo src={logoPic}></Logo>
					</Link>
					<SearchWrapper onKeyDown={(e) => this.handleKeyDown(e, this.keySearch)} ref={(input) => { this.keySearch = input }}>
					</SearchWrapper>
					<Blog>我的博客</Blog>
					<Me>我的</Me>
					{
						location==='detail' ? 
						<Link to='/edit'>
						<EditButton>编辑</EditButton> 
						</Link>
						: location==='edit' ? <SaveButton>保存</SaveButton> : null
					}
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
		login: state.get('loginRegister').get('login'),
		location: state.get('home').get('location')
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		logout() {
			dispatch(loginRegisterActionCreators.logout())
		},
		setLoginStat(login) {
			dispatch(loginRegisterActionCreators.setLoginStat(login))
		}
	}
}

export default compose(withRouter, connect(mapStateToProps, mapDispathToProps))(Header);
