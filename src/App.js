import React from "react";
import Admin from "./components/admin";
import Formulario_mod from './components/modificar_admin/index';


class App extends React.Component{
  
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

export default App