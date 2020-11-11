
// import "./styles/style.css";
// import "./script/component/navbar.js";
// import main from './script/view/main.js';

// document.addEventListener("DOMContentLoaded", main);

import React, { Component } from 'react';

import './styles/style.css';

import Header from './component/Header/Header';
import Main from './component/Main/Main';

class App extends Component {
  render() {
    return (
      <div>          
          <Header></Header>
          <Main></Main>
      </div>
    )
  }
}

export default App;
