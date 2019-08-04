import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header/index.js'
import store from './store/index.js'
import { Provider } from 'react-redux'

import Home from './pages/home';
import Search from './pages/search'
import Edit from './pages/edit'

import Detail from './pages/detail/';
import LoginRegister  from './pages/loginRegister';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={Home}></Route>
            <Route path='/loginRegister/' exact component={LoginRegister}></Route>
            <Route path='/search' exact component={Search}></Route>
            <Route path='/edit' exact component={Edit}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}


export default App;
