import React from "react";
import Tituloh1 from "./Tituloh1";
import Botones from "./Botones"
import Datos from "./Datos";
import Buscador from "./Buscador";
import Tituloh2 from "./Tituloh2";
import Tituloh3 from "./Tituloh3";


class Modificar extends React.Component{
  render(){
      return(
         <div>
             <Tituloh1 Tituloh1="Modificar equipo"/>
             
             <Buscador/>

             <Tituloh2 Tituloh2="Nombre del equipo buscado"/>
             <Tituloh3 Tituloh3="Jugadores"/>
             <Datos/>
             
             <div style={
                 {
                     display:'flex',
                 }
             }>
                <Botones boton="Agregar Otro Jugador"/>
                <Botones boton="Eliminar"/>
                <Botones boton="Modificar"/>
             </div>
         </div>
      )
  }
}

export default Modificar;