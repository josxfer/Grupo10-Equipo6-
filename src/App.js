import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Positions from './components/PositionsComponent';
import './App.css';

function App() {
  return (
    <div>
      <Navbar dark color="dark">
        <div className="container">
          <NavbarBrand href="/">Curling Tournaments</NavbarBrand>
        </div>
      </Navbar>
      <div  style={{backgroundColor: '#1a1e25'}}>
        <Positions/>
      </div>
    </div>
  );
}

export default App;
