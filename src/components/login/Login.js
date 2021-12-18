import React from "react";
import Boton from '../Botones_admin';
import Cuadro_admin from "../formulario_admin/index";

class Login extends React.Component{

    cedula =React.createRef()
    nombre= React.createRef()
    correo= React.createRef()
    celular=React.createRef()
    contraseña= React.createRef()
    confirm_contra= React.createRef()
    

    clicEnviar=()=>{
        const data ={

            ced:this.cedula.current.value,
            nom:this.nombre.current.value,
            corr:this.correo.current.value,
            cel:this.celular.current.value,
            cont:this.contraseña.current.value,
            confim:this.confirm_contra.current.value
        }

        console.log(data)
        //this.props.procesamiento(data)
    }
    
    render (){
        return(
            <div className ="container">
                <Cuadro_admin label={'Numero de cedula: '} 
                refe={this.cedula} placeholder={'00002135'} type={'text'} 
                name={'ced_user'}/>
                <Cuadro_admin label={'Nombre Completo: '} 
                refe={this.nombre} placeholder={'00002135'} type={'text'} 
                name={'ced_user'}/>
                <Cuadro_admin label={'Correo Electronico: '} 
                refe={this.correo} placeholder={'00002135'} type={'text'} 
                name={'ced_user'}/>
                <Cuadro_admin label={'Numero del Celuar: '} 
                refe={this.celular} placeholder={'00002135'} type={'text'} 
                name={'ced_user'}/>
                <Cuadro_admin label={'Contraseña: '} 
                refe={this.contraseña} placeholder={'00002135'} type={'password'} 
                name={'contr_user'}/>
                <Cuadro_admin label={'Confirmar Contraseña: '} 
                refe={this.confirm_contra} placeholder={'00002135'} type={'password'} 
                name={'confir_user'}/>
                <Boton funcion ={this.clicEnviar} nombre_bt='Logear'/>
            </div>
        )
    }
}
export default Login