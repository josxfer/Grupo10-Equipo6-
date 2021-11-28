import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Positions from './components/PositionsComponent';
import './App.css';
import { TEAMS } from './shared/teams'

class App extends Component {

  constructor(pops) {
    super(pops);

    this.state = {
      teams: TEAMS
    };
  }

  render() {
    return (
      <div>
        <Navbar dark color="dark">
          <div className="container">
            <NavbarBrand href="/">Curling Tournaments</NavbarBrand>
          </div>
        </Navbar>
        <div  style={{backgroundColor: '#1a1e25'}}>
          <Positions teams={ this.state.teams}/>
        </div>
      </div>
    );
  }
}

export default App;
