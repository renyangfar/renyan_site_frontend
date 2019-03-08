import styled, { keyframes } from 'styled-components';

export const LoginRegisterWrapper = styled.div`
	position: relative;
	width: 400px;
	height: 710px;
	margin: auto;
	background-color: rgb(250, 250, 250);
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
		background-color: rgb(250, 250, 250);
		border-radius: 3px;
		&:-webkit-autofill,
		&:-webkit-autofill:hover,
		&:-webkit-autofill:focus,
		&:-webkit-autofill:active {
			-webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
			-webkit-transition-delay: 9999s;
		}
	}
`;

export const UserName = styled.input`
`

export const Passwd = styled.input`
`

const rainbow = keyframes`
  0% {
    opacity: 0.7;
  }
  100% {
	opacity: 1;
	transform: scale(1.2);
  }
`;

export const Commit = styled.button`
	display: block;
	margin: 100px auto;
	width: 120px;
	line-height:50px;
	font-size: 20px;
	cursor: pointer;
	margin-bottom: 40px;
	background-color: #009688;
	color: #fff;
	border: none;
	outline: none;
	box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
	&: hover {
		box-shadow: 0 3px 6px 0 rgba(0,0,0,0.2), 0 3px 12px 0 rgba(0,0,0,0.2);
	}
	&: active {
		animation: 0.5s ${rainbow};
	}
`



export const Forget = styled.div`
	text-align: center;
	color: rgb(3, 155, 229);
	cursor: pointer;
	margin-bottom: 40px;
	&: hover {
		color: rgb(3, 200, 229);
	}
`
export const ErrorMsg = styled.div`
	text-align: center;
	color: #f00;
`