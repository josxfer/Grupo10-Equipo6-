import React from "react";
import Boton from "../Botones_admin/index";
import ColumnasAdmin from "../Columnas_admin/index";
import Navegacion from "../Encabezado/index";


class Admin extends React.Component{
    enviar=()=>{
        console.log('Modificar')
        
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
                        <td><ColumnasAdmin nombre='Id Usuario'/></td>
                        <td><ColumnasAdmin nombre='Nombre Usuario'/></td>
                        <td><ColumnasAdmin nombre='Tipo Usuario'/></td>
                        <td><ColumnasAdmin nombre='Equipo'/></td>
                        <td><ColumnasAdmin nombre='Campeonato'/></td>
                        <td><ColumnasAdmin nombre='Accion'/></td>
                        
                    </tr>
                    <tr>
                        <td><ColumnasAdmin nombre='1'/></td>
                        <td><ColumnasAdmin nombre='Pepito'/></td>
                        <td><ColumnasAdmin nombre='Jugador'/></td>
                        <td><ColumnasAdmin nombre='10'/></td>
                        <td><ColumnasAdmin nombre='Liga Diamante'/></td>
                        <td>
                            <Boton nombre_bt= 'Modificar' funcion={this.enviar}/>
                            <Boton evento={'this.eliminar'} nombre_bt= 'Eliminar'/>
                        </td>
                    </tr>
                </table>
                </div>
            </div>
        )
    }
}

export default Admin;
