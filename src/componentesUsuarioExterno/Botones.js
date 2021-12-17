import React from "react";
import "./css/BotonesEstilo.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';


class Botones extends React.Component{
  render(){
      return(
         <div style={
           {
             margin:'5px 5px 5px 5px',

           }
         }>
            <button type="button" class="btn btn-danger">{this.props.boton}</button>
         </div>
      )
  }
}

export default Botones;