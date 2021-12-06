import React, { Component } from 'react';
import { TEAMS } from '../shared/teams'
import { MATCHES } from '../shared/matches';
import Home from './HomePageComponent';
import { Routes, Route } from 'react-router-dom';
import MatchesPage from './MatchesPageComponent'
import Header from './HeaderComponent';
import Footer  from './FooterComponent';
import PositionsPage from './PositionsPageComponent';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      teams: TEAMS,
      matches: MATCHES,
    };
  }

  render() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/home" element={ <Home matches={ this.state.matches}  teams={ this.state.teams}/> }/>
                <Route path="/tournaments" element={ <Home/> }/>
                <Route path="/matches" element={ <MatchesPage matches={ this.state.matches}/> }/>
                <Route path="/positions" element={ <PositionsPage  teams={ this.state.teams}/> }/>
            </Routes>
            <Footer/>
        </div>
    );
  }
}

export default Main;
