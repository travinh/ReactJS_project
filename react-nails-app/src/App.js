
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import Sidebar from './components/Sidebar';
//if don't have index.js in Navbar, then specify the file after /Navbar

function App() {
  return (
    <Router>
      <Sidebar></Sidebar>
       <Navbar></Navbar>
    </Router>
  );
}

export default App;
