import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header/index.js'
import store from './store/index.js'
import { Provider } from 'react-redux'

import Home from './pages/home';
import Search from './pages/search'

// import Detail from './pages/detail/loadable';
import LoginRegister  from './pages/loginRegister';
// import Write from './pages/write';

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
            {/* <Route path='/write/' exact component={Write}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route> */}
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}


export default App;
