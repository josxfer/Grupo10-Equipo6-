import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Positions from './components/PositionsComponent';
import './App.css';
import { TEAMS } from './shared/teams'
import Matches from './components/MatchesComponent';
import { MATCHES } from './shared/matches';

class App extends Component {

  constructor(pops) {
    super(pops);

    this.state = {
      teams: TEAMS,
      matches: MATCHES
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
        <div className="container" style={{backgroundColor: '#1a1e25'}}>
          <div className="row">
            <Matches matches={ this.state.matches}/>
            <Positions teams={ this.state.teams}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
