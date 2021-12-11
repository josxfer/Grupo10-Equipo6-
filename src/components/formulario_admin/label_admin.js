import React from "react";

class Cuadro_admin extends React.Component{
    render(){
        return(
            <div>
                <label>{this.props.label}</label>
                <input type={this.props.typer} name={this.props.name}/>
            </div>
        )
    }
}
export default Cuadro_admin