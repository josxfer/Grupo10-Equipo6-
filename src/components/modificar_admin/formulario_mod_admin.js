import React from "react";
import FormularioGen from '../Registro/index'


//Campo requerido para modificar los datos

class Formulario_mod extends React.Component{
    render(){
        return(
            <FormularioGen nombre_boton={'Guardar Cambios'}/>
        )
    }
}
export default Formulario_mod;