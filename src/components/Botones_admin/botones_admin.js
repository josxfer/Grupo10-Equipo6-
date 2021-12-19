import React from "react";

class Boton extends React.Component{

    render(){
        return(<button  
        className="btn btn-outline-primary" onClick={this.props.evento}>
        {this.props.nombre_bt}
        
        </button>)
    }
}
export default Boton;