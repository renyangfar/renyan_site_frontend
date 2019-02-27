import styled from 'styled-components';

export const LoginRegisterWrapper = styled.div`
	position: relative;
	width: 400px;
	margin: 80px auto;
	background-color: #eee;
	box-shadow: 0 0 8px rgba(0,0,0,.2);
`;

export const Header = styled.div`
	height: 48px;
	text-align: center;
	background-color: #009688;
	.header_span{
		display: block;
		cursor: pointer;
		color: #fff;
		font-size: 20px;
		width: 200px;
		line-height: 48px;
	}
`;
export const LoginHeader = styled.div`
	float: left;
	width: 50%;
`;

export const RegisterHeader = styled.div`
	float: right;
	width: 50%;
`;

export const Indicator = styled.div`
	position: absolute;
	left: ${(props) => props.distance}px;
	width: 200px;
	height: 48px;
	background-color: rgb(0,242,241);
	opacity: 0.3;
	transition: all 0.1s ease-in;
`;



export const SayHello = styled.h1`
	font-size: 42px;
	color: #009688;
	line-height: 48px;
	margin: 40px;
`;

export const FormWrapper = styled.div`
	padding: 20px;
	.input {
		display: block;
		margin-bottom: 40px;
		width: 100%;
		height: 40px;
		border-top: 0;
		border-left: 0;
		border-right: 0;
		border-bottom: 1px solid #aaa; 
		outline-style: none;
		font-size: 15px;
		background-color: #eee;
		border-radius: 3px;
	}
`;

export const UserName = styled.input`
`

export const Passwd = styled.input`
`

export const Commit = styled.button`
	display: block;
	margin: auto;
	width: 120px;
	line-height:50px;
	font-size: 20px;
	cursor: pointer;
	margin-bottom: 40px;
	background-color: #009688;
	color: #fff;
	border: none;
	box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
`
export const Forget = styled.div`
	text-align: center;
	color: rgb(3, 155, 229);
	cursor: pointer;
	margin-bottom: 200px;
`