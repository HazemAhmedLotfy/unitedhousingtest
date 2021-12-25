import logo from './logo.svg';
import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import TopSection from './components/topSection';
import StockSection from './components/stock';
import Portfolio from './components/Portfolio';
import AboutUs from './components/AboutUs';
import News from './components/News';
import Header from './shared/header';


import './App.css';



function App() {
  return (
    <div>
          <Header></Header>
    </div>
   
  );
}

export default App;
