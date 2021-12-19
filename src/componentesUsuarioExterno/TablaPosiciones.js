import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import DatosPosiciones from "./DatosPosicion";


class TablaPosiciones extends React.Component{
  render(){
      return(
         <div style={
           {
             margin:'20px 20px 20px 20px',

           }
         }>
            <table className="table caption-top">
                
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Campeonato</th>
                    <th scope="col">Equipo</th>
                    <th scope="col">Puntos</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{this.props.posicion}</th>
                    <td>{this.props.campeonato}</td>
                    <td>{this.props.equipo}</td>
                    <td>{this.props.puntos}</td>
                  </tr>
                </tbody>
                
            </table>
         </div>
      )
  }
}

export default TablaPosiciones;