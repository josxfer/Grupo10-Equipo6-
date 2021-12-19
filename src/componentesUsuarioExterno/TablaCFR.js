import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class TablaCFR extends React.Component{
  render(){
      return(
        <div>
            <table className="table table-dark table-sm">
                <thead>
                    <tr>
                    <th scope="col">Local</th>
                    <th scope="col">Visitante</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Resultados</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">{this.props.local}</th>
                    <td>{this.props.visitante}</td>
                    <td>{this.props.fecha}</td>
                    <td>{this.props.resultados}</td>
                    </tr>
                </tbody>
            </table>
        </div>
      )
  }
}

export default TablaCFR;