import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tituloh1 from "./Tituloh1";
import Tituloh2 from "./Tituloh2";
import TablaPosiciones from "./TablaPosiciones";



class Posiciones extends React.Component{
  render(){
      return(
         <div style={
           {
            

           }
         }>
            <Tituloh1 Tituloh1="Resultados"/>
            <Tituloh2 Tituloh2="Campeonatos"/>
            <TablaPosiciones posicion="1" campeonato="campeonato" equipo="Equipo" puntos="Puntos del equipo" />
            
         </div>
      )
  }
}

export default Posiciones;