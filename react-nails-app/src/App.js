
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
//if don't have index.js in Navbar, then specify the file after /Navbar

function App() {
  return (
    <Router>
       <Navbar></Navbar>
    </Router>
  );
}

export default App;
