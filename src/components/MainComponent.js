import React, { Component } from 'react';
import Home from './HomePageComponent';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import MatchesPage from './MatchesPageComponent'
import Header from './HeaderComponent';
import Footer  from './FooterComponent';
import PositionsPage from './PositionsPageComponent';
import NewTornament from './NewTournamentComponent';
import { TEAMS } from '../shared/teams'
import { MATCHES } from '../shared/matches';

// const mapStateToProps = state => {
//   return {
//     teams: state.teams,
//     matches: state.matches,
//   }
// }

class Main extends Component {

  constructor(props) {
    super(props);

    this.state ={
      teams: TEAMS,
      matches: MATCHES
    }

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
                <Route path="/newtournament" element={ <NewTornament/> }/>
            </Routes>
            <Footer/>
        </div>
    );
  }
}

// export default connect(mapStateToProps)(Main);
export default Main;
