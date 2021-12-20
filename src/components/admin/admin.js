import React from "react";
import Boton from "../Botones_admin/index";
import ColumnasAdmin from "../Columnas_admin/index";
import Navegacion from "../Encabezado/index";

let clickenviar =()=>{
    fetch("http://localhost:8080/")
        .then((response)=> response.json())
        .then((data)=> console.log(data));
    console.log("Prueba")
    
};

class Admin extends React.Component{

    

    eliminar=()=>{
        console.log('Seccion de eliminar')
    }

    render(){
        return(
            <div>
            <Navegacion name={'Vista Adminitrador'}/>
            <div className='container'>
                <h1>Usuarios Externos</h1>
                <table className="table text-white">
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
                            <Boton nombre_bt= 'Modificar' evento={this.clickenviar}/>
                            <Boton evento={this.eliminar} nombre_bt= 'Eliminar'/>
                        </td>
                    </tr>
                </table>
                </div>
            </div>
        )
    }
}

export default Admin;
