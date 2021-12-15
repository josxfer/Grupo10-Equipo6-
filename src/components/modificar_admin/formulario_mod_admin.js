import React from "react";
import Cuadro_admin from '../formulario_admin'
import Boton from "../Botones_admin/botones_admin";


//Campo requerido para modificar los usuarios internos

class Formulario_mod extends React.Component{
    
    constructor(){
        super()
        this.state={
            cedula_user: '',
            nombre_user:'',
            correo_user:'',
            acceso_user:'',
            contra_user:'',
            confirm_contra_user:''

        }
    }

    obtenerdatos=(e)=>{
        this.setState({
            [e.target.name]: e.target.value 
        });
    }

    clickEnviar =()=>{
        this.props.procesamiento(this.state)
        
    }


    render(){
        return(
            <div class='container'>
                <Cuadro_admin evento={this.obtenerdatos} label={'Numero de cedula:   '} 
                placeholder={'000001'} type={'text'} name={'cedula_user'}/>
                <Cuadro_admin evento={this.obtenerdatos} label={'Nombre Completo:   '} 
                placeholder={'Andres Felipe Franco'} type={'text'} 
                name={'nombre_user'}/>
                <Cuadro_admin evento={this.obtenerdatos} label={'Correo Electronico:   '} 
                placeholder={'@'} type={'email'} name={'correo_user'}/>
                <Cuadro_admin evento={this.obtenerdatos} label={'Nivel de Acceso:   '} 
                placeholder={'Usuario Interno'} type={'text'} 
                name={'acceso_user'}/>
                <Cuadro_admin evento={this.obtenerdatos} label={'Contraseña:   '} 
                placeholder={'*****'} type={'password'} 
                name={'contra_user'}/>
                <Cuadro_admin evento={this.obtenerdatos} label={'Confirmar Contraseña: '} 
                placeholder={'*****'} type={'password'} 
                name={'confir_contra_user'}/>
                <br/>
                <Boton funcion={this.clickEnviar} nombre_bt='Modificar'/>
            </div>
            
        )
    }
}
export default Formulario_mod