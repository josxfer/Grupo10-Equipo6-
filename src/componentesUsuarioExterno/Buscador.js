import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Botones from "./Botones";

class Buscador extends React.Component{
  render(){
      return(
         <div style={
           {
            margin: '5px 0px 0px 0px',
            display:'flex',
            alignItems:'center'
           }
         }>
            <div className="col-4">
                  <input type="text" className="form-control" id="inputAddress2" placeholder="Ingrese el nombre del equipo"/>
            </div>
            <Botones boton= "Buscar"/>
         </div>
      )
  }
}

export default Buscador;