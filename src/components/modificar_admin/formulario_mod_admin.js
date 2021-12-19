import React from "react";
import FormularioGen from '../Registro/index'


//Campo requerido para modificar los datos

class FormularioMod extends React.Component{
    render(){
        return(
            <FormularioGen nombre_boton={'Guardar Cambios'}/>
        )
    }
}
export default FormularioMod;