import React from "react";
import Boton from "../Botones_admin/index";
import Columnas_admin from "../columnas_admin";
import '../soccer-master/css/bootstrap.min.css';
import Formulario_mod from "../modificar_admin";

class Admin extends React.Component{
    enviar=()=>{
        console.log('Seccion de Modificar')//revisar la opcion de realizar a funcion desde esta parte
    }

    eliminar=()=>{
        console.log('Seccion de eliminar')
    }

    render(){
        return(
            <div class='container'>
                <table class="table">
                    <tr>
                        <td><Columnas_admin nombre='Id Usuario'/></td>
                        <td><Columnas_admin nombre='Nombre Usuario'/></td>
                        <td><Columnas_admin nombre='Tipo Usuario'/></td>
                        <td><Columnas_admin nombre='Equipo'/></td>
                        <td><Columnas_admin nombre='Campeonato'/></td>
                        <td><Columnas_admin nombre='Accion'/></td>
                        
                    </tr>
                    <tr>
                        <td><Columnas_admin nombre='1'/></td>
                        <td><Columnas_admin nombre='Pepito'/></td>
                        <td><Columnas_admin nombre='Jugador'/></td>
                        <td><Columnas_admin nombre='10'/></td>
                        <td><Columnas_admin nombre='Liga Diamante'/></td>
                        <td>
                            <Boton funcion={this.enviar} nombre_bt= 'Modificar' direccion={Formulario_mod}>
                            </Boton>
                            <Boton funcion={this.eliminar} nombre_bt= 'Eliminar'/>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Admin
