import React from "react";

class Boton extends React.Component{

    render(){
        return(<button class="btn btn-outline-primary">{this.props.nombre_bt}</button>)
    }
}
export default Boton;