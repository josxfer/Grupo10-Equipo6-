import React from "react";
import Cuadro_admin from '../formulario_admin'
import Boton from "../Botones_admin/botones_admin";


//Campo requerido para modificar los usuarios internos

class Formulario_mod extends React.Component{
    
    cedula =React.createRef()
    nombre= React.createRef()
    correo= React.createRef()
    contraseña= React.createRef()
    confirm_contra= React.createRef()
    acceso= React.createRef()

    clickEnviar =()=>{

       console.log(this.cedula.current.value)
       console.log(this.nombre.current.value)
       console.log(this.correo.current.value)
       console.log(this.contraseña.current.value)
       console.log(this.confirm_contra.current.value)
       console.log(this.acceso.current.value)
        
    }


    render(){
        return(
            <div class='container'>
                <Cuadro_admin refe={this.cedula} label={'Numero de cedula:   '} 
                placeholder={'000001'} type={'text'} name={'cedula_user'}/>
                <Cuadro_admin refe={this.nombre} label={'Nombre Completo:   '} 
                placeholder={'Andres Felipe Franco'} type={'text'} 
                name={'nombre_user'}/>
                <Cuadro_admin refe={this.correo} label={'Correo Electronico:   '} 
                placeholder={'@'} type={'email'} name={'correo_user'}/>
                <Cuadro_admin refe={this.acceso} label={'Nivel de Acceso:   '} 
                placeholder={'Usuario Interno'} type={'text'} 
                name={'acceso_user'}/>
                <Cuadro_admin refe={this.contraseña} label={'Contraseña:   '} 
                placeholder={'*****'} type={'password'} 
                name={'contra_user'}/>
                <Cuadro_admin refe={this.confirm_contra} label={'Confirmar Contraseña: '} 
                placeholder={'*****'} type={'password'} 
                name={'confir_contra_user'}/>
                <br/>
                <Boton funcion={this.clickEnviar} nombre_bt='Modificar'/>
            </div>
            
        )
    }
}
export default Formulario_mod