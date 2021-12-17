import React from "react";
import TablaCFR from "./TablaCFR";
import Tituloh3 from "./Tituloh3";


class CFR extends React.Component{
  render(){
      return(
        <div style={
            {
                margin:'15px 15px 15px 15px'
            }
        }>
            <Tituloh3 Tituloh3="Calendario de fechas y Resultados"/>
            <TablaCFR local="1" visitante="campeonato" fecha="Equipo" resultados="Puntos del equipo"/>
        </div>
      )
  }
}

export default CFR;