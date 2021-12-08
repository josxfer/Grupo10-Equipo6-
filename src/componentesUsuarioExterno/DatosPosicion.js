import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


class DatosPosiciones extends React.Component{
    render(){
        return(
            
                <tbody>
                  <tr>
                    <th scope="row">{this.props.posicion}</th>
                    <td>{this.props.campeonato}</td>
                    <td>{this.props.equipo}</td>
                    <td>{this.props.puntos}</td>
                  </tr>
                </tbody>
            
        )
    }
}
export default DatosPosiciones;