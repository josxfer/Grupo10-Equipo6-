import React from "react";
import Cuadro_admin from '../formulario_admin'
import Boton from '../Botones_admin'

class Registro extends React.Component{
    
    cedula =React.createRef()
    nombre= React.createRef()
    correo= React.createRef()
    contraseña= React.createRef()
    confirm_contra= React.createRef()
    acceso= React.createRef()

    clickEnviar =()=>{
        const data = {
            ced:this.cedula.current.value,
            nom:this.nombre.current.value,
            corr:this.correo.current.value,
            cont:this.contraseña.current.value,
            confim:this.confirm_contra.current.value,
            acces:this.acceso.current.value
        }
        console.log(data)
        
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
                <Boton funcion={this.clickEnviar} nombre_bt='Registrar'/>
            </div>
            
        )
    }
}
export default Registro