import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Head from './components/Head';
import Home from './components/Home';
import Routes from './components/Routes';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Head />
      </div>
      <Home />
      <Routes />
    </div>
  );
}

export default App;