import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navegacion from "./Navegacion";
import Inscripcion from "./Inscripcion";
import Modificar from "./Modificar";
import Resultados from "./Resultados";

class App extends React.Component{
  render(){
      return(
        <Router>
          <Navegacion/>
          <Switch>
          
            <Route path='/Inscripcion' exact component={Inscripcion}/>
            <Route path='/Modificar' component={Modificar}/>
            <Route path='/Resultados' component={Resultados}/>
          
          </Switch>
        </Router>
        
      )
  }
}

export default App;