import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle, Page } from "./style.js";
import { GlobalIconFontStyle } from './statics/iconfont/iconfont.js'


ReactDOM.render(<Fragment><GlobalStyle /><GlobalIconFontStyle /><Page><App /></Page></Fragment>, document.getElementById('root'));

