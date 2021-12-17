import React from "react";
import Posiciones from "./Posiciones";
import CFR from "./CFR";


class Resultados extends React.Component{
  render(){
      return(
         <div>
            <Posiciones/>
            <CFR/>
         </div>
      )
  }
}

export default Resultados;