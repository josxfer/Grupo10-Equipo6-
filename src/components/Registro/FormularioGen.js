import React from "react";
import Cuadro_admin from '../formulario_admin'
import Boton from '../Botones_admin'

class FormularioGen extends React.Component{

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
                <Cuadro_admin label={'Numero de cedula:   '} 
                placeholder={'000001'} type={'text'} name={'cedula_user'}/>
                <Cuadro_admin label={'Nombre Completo:   '} 
                placeholder={'Andres Felipe Franco'} type={'text'} 
                name={'nombre_user'}/>
                <Cuadro_admin  label={'Correo Electronico:   '} 
                placeholder={'@'} type={'email'} name={'correo_user'}/>
                <Cuadro_admin  label={'Nivel de Acceso:   '} 
                placeholder={'Usuario Interno'} type={'text'} 
                name={'acceso_user'}/>
                <Cuadro_admin  label={'Contraseña:   '} 
                placeholder={'*****'} type={'password'} 
                name={'contra_user'}/>
                <Cuadro_admin  label={'Confirmar Contraseña: '} 
                placeholder={'*****'} type={'password'} 
                name={'confir_contra_user'}/>
                <br/>
                <Boton nombre_bt={this.props.nombre_boton}/>
            </form>
            
        )
    }
}
export default FormularioGen