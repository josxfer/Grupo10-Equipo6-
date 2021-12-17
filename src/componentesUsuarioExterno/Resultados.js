import React from "react";
import Posiciones from "./Posiciones";
import CFR from "./CFR";
import Navegacion from "../componentesUsuarioExterno/Navegacion";


class Resultados extends React.Component{
  render(){
      return(
         <div className="container">
            <Navegacion/>
            <Posiciones/>
            <CFR/>
         </div>
      )
  }
}

export default Resultados;