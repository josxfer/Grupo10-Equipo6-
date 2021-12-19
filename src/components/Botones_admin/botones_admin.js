import React from "react";
import { Link } from "react-router-dom";

class Boton extends React.Component{

    render(){
        return(<button  
        className="btn btn-outline-primary" onClick={this.props.evento}>
        {this.props.nombre_bt}
        <Link to={this.props.funcion}></Link>
        </button>)
    }
}
export default Boton;