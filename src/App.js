import React, { Component } from 'react';
import Positions from './components/PositionsComponent';
import './App.css';
import { TEAMS } from './shared/teams'
import Matches from './components/MatchesComponent';
import { MATCHES } from './shared/matches';
import Header from './components/HeaderComponent';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/HomeComponent';
import { Routes, Route, Redirect } from 'react-router-dom';
import Footer  from './components/FooterComponent';
import VS from './components/VSComponent'

class App extends Component {

  constructor(pops) {
    super(pops);

    this.state = {
      teams: TEAMS,
      matches: MATCHES
    };
  }

  render() {

    const HomePage = () => {
      return(
        <Home/>
      );
    }

    return (
      <BrowserRouter>
        <div>
          <Header/>
          <VS/>
          <Home/>
          <Routes>
            <Route path="/home" Component={ HomePage }/>
            <Route path="/tournaments" Component={ HomePage }/>
            <Route path="/matches" Component={ HomePage }/>
            <Route path="/positions" Component={ HomePage }/>
          </Routes>
          <div className="container" style={{backgroundColor: '#1a1e25'}}>
            <div className="row">
              <Matches matches={ this.state.matches}/>
              <Positions teams={ this.state.teams}/>
            </div>
          </div>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
