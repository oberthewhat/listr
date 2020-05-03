import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar"
import Router from './router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

class App extends Component {

  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <NavBar />
            <Router />
          </BrowserRouter>
        </Provider>
      </div>
    )
  };
}

export default App;
