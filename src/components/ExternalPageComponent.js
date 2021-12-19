import React from "react";
import Navegacion from "../componentesUsuarioExterno/Navegacion";
import Inscripcion from "../componentesUsuarioExterno/Inscripcion";


class ExternalPage extends React.Component{
  render(){
      return(
        <div className="container">
          <Navegacion/>          
            <Inscripcion/>
        </div>
        
      )
  }
}

export default ExternalPage;