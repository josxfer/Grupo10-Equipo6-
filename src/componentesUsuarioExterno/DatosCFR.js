import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


class DatosCFR extends React.Component{
    render(){
        return(
            
                <tbody>
                  <tr>
                    <th scope="row">{this.props.local}</th>
                    <td>{this.props.visitante}</td>
                    <td>{this.props.fecha}</td>
                    <td>{this.props.resultados}</td>
                  </tr>
                </tbody>
            
        )
    }
}
export default DatosCFR;