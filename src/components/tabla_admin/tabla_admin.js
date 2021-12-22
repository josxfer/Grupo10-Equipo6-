import React from "react";
class Tabla_admin extends React.Component{
    render(){
        return(
            <table>
                <tr>
                    <td>ID USUARIO</td>
                    <td>NOMBRE USUARIO</td>
                    <td>TIPO USUARIO</td>
                    <td>EQUIPO</td>
                    <td>CAMPEONATO</td>
                    <td>ACCION</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Pepito Perez</td>
                    <td>Jugador</td>
                    <td>10</td>
                    <td>Liga diamante</td>
                </tr>
            </table>
            
        )
    }
}
export default Tabla_admin;