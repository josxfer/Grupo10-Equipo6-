import React from "react";
import Cuadro_admin from '../formulario_admin'
class Formulario_mod extends React.Component{
    render(){
        return(
            <Cuadro_admin label={'Nombre Completo: '} type={'text'} name={'nombre_user'}/>
        )
    }
}
export default Formulario_mod