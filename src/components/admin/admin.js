import React from "react";
import Boton from "../Botones_admin/index";
import Columnas_admin from "../Columnas_admin/index";
import Navegacion from "../Encabezado/index";
import { Link } from "react-router-dom";

class Admin extends React.Component{
    enviar=()=>{
        <Link to={'/Modificar'}/>//revisar la opcion de realizar a funcion desde esta parte
    }

    eliminar=()=>{
        console.log('Seccion de eliminar')
    }

    render(){
        return(
            <div>
            <Navegacion name={'Vista Adminitrador'}/>
            <div className='container'>
                <h1>Usuarios Externos</h1>
                <table className="table">
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
                            <Boton nombre_bt= 'Modificar' funcion={'/Modificar'}/>
                            <Boton evento={'this.eliminar'} nombre_bt= 'Eliminar'/>
                        </td>
                    </tr>
                </table>
                </div>
            </div>
        )
    }
}

export default Admin
