import React, { Component } from 'react';

// bootstrap 
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
//import $ from 'jquery';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
// components
import Header from './components/Header';
import Navbar from './components/Navbar';
import SearchComponent from './components/Search-Component';
// // assets 
// import logo from './logo.svg';
// import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <Header />
         <SearchComponent />
      </div>
    );
  }
}

//export default App;
