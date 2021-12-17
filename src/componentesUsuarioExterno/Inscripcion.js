import React from "react";
import Tituloh1 from "./Tituloh1";
import Formulario from "./Formulario";
import Botones from "./Botones"
import Navegacion from "../componentesUsuarioExterno/Navegacion";


class Inscripcion extends React.Component{
  render(){
      return(
         <div className="container">
            <Navegacion/>
             <Tituloh1 Tituloh1="Inscripcion del equipo"/>
             <Formulario/>
             <Botones boton="Agregar Otro Jugador"/>
             <Botones boton="Inscribir"/>
         </div>
      )
  }
}

export default Inscripcion;