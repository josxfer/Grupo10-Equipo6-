import React, { Component } from 'react';
import Home from './HomePageComponent';
import { Routes, Route } from 'react-router-dom';
import MatchesPage from './MatchesPageComponent'
import Header from './HeaderComponent';
import Footer  from './FooterComponent';
import PositionsPage from './PositionsPageComponent';
import NewTornament from './NewTournamentComponent';
import Tournaments from './TournamentsComponent';
import Results from './ResultsComponent';
import { TEAMS } from '../shared/teams';
import { MATCHES } from '../shared/matches';
import { TOURNAMENTS } from '../shared/tournaments';
import NewMatch from './NewMatchComponent';
import NewResult from './NewResultComponent';
import Admin from './Admin/index';
import External from './ExternalPageComponent'
import Inscripcion from "../componentesUsuarioExterno/Inscripcion";
import Modificar from "../componentesUsuarioExterno/Modificar";
import Resultados from "../componentesUsuarioExterno/Resultados";
import FormularioMod from './Modificar_admin';
import Login from './Login/index';
import Registro from './Registro/Registro';

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
      matches: MATCHES,
      tournaments: TOURNAMENTS
    }

  }

  render() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/home" element={ <Home matches={ this.state.matches}  teams={ this.state.teams}/> }/>
                <Route path="/tournaments" element={ <Tournaments tournaments={ this.state.tournaments }/> }/>
                <Route path="/matches" element={ <MatchesPage matches={ this.state.matches} teams={ this.state.teams}/> }/>
                <Route path="/positions" element={ <PositionsPage  teams={ this.state.teams}/> }/>
                <Route path="/newtournament" element={ <NewTornament/> }/>
                <Route path="/results" element={ <Results matches={ this.state.matches}/> }/>
                <Route path="/newmatch" element={ <NewMatch/> }/>
                <Route path="/newresult" element={ <NewResult/> }/>
                <Route path="/admin" element={ <Admin/> }/>
                <Route path="/external" element={ <External/> }/>
                <Route path='/Inscripcion' exact element={ <Inscripcion/> }/>
                <Route path='/Modificar' element={ <Modificar/> }/>
                <Route path='/Resultados' element={ <Resultados/>}/>
                {/* Modificar usuarios internos */}
                <Route path="/ModificarUserIn" element={<FormularioMod/>}/>
                <Route path="/RegistroUserIn" element={<FormularioMod/>}/>
                {/* Ingreso general usuarios */}
                <Route path="/Ingreso" element={<Login /> } />
                <Route path="/Registro" element={<Registro /> } />
            </Routes>
            <Footer/>
        </div>
    );
  }
}

// export default connect(mapStateToProps)(Main);
export default Main;