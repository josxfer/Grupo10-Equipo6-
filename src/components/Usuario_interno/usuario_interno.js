import React from "react";
//import { Link } from "react-router-dom";
import CuadroAdmin from "../Formulario_admin";
import Boton from "../Botones_admin";

class UsuarioInterno extends React.Component{

    enviar =(e)=>{
        e.preventDefault()
        
        console.log(e.target[0].value)
        console.log(e.target[1].value)
        console.log(e.target[2].value)
        console.log(e.target[3].value)
        console.log(e.target[4].value)
        console.log(e.target[5].value)
        
    }


    render(){
        return(
            <form onSubmit={this.enviar} className='container'>
                <CuadroAdmin label={'Numero de cedula:   '} 
                placeholder={'000001'} type={'text'} name={'cedula_user'}/>
                <CuadroAdmin label={'Nombre Completo:   '} 
                placeholder={'Andres Felipe Franco'} type={'text'} 
                name={'nombre_user'}/>
                <CuadroAdmin  label={'Correo Electronico:   '} 
                placeholder={'@'} type={'email'} name={'correo_user'}/>
                <CuadroAdmin  label={'Nivel de Acceso:   '} 
                placeholder={'Usuario Interno'} type={'text'} 
                name={'acceso_user'}/>
                <CuadroAdmin  label={'Contraseña:   '} 
                placeholder={'*****'} type={'password'} 
                name={'contra_user'}/>
                <CuadroAdmin  label={'Confirmar Contraseña: '} 
                placeholder={'*****'} type={'password'} 
                name={'confir_contra_user'}/>
                <CuadroAdmin  label={'Rol: '} 
                placeholder={'Usuario Interno'} type={'text'} 
                name={'Rol'}/>
                <br/>
                <Boton nombre_bt={this.props.nombre_boton}/>
            </form>
            
        )
    }
}
export default UsuarioInterno