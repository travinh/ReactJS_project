
import './App.css';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './pages'
//if don't have index.js in Navbar, then specify the file after /Navbar

function App() {
  return (
    <Router>
      <Home/>
    </Router>
  );
}

export default App;
