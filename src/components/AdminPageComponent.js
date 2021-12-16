import React from "react";
import Admin from "./admin/admin";
import Formulario_mod from './modificar_admin/formulario_mod_admin';


class AdminPage extends React.Component{
  
  datosForm =(data)=>{
    console.log('Desde el padre');
    console.log(data)
  }

  render(){


    return(
    <div>
      <Admin/>
      <Formulario_mod procesamiento={this.datosForm}/>
    </div>)
  }
}

export default AdminPage