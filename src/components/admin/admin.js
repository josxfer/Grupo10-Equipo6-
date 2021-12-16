import React from "react";
import Boton from "../Botones_admin/index";
import Columnas_admin from "../columnas_admin";


class Admin extends React.Component{
    render(){
        return(
            <div>
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
                        <td><Columnas_admin/>
                            <Boton nombre_bt= 'Modificar'>
                            </Boton>
                            <Boton nombre_bt= 'Eliminar'/>
                        </td>
                            
                    </tr>
                </table>
            </div>
        )
    }
}

export default Admin
