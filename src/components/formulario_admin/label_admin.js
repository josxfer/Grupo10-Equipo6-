import React from "react";

class Cuadro_admin extends React.Component{
    render(){
        return(
            <div class="container">
                <label>{this.props.label}</label>
                <br/>
                <input
                ref={this.props.refe}
                class="form-control w-50" 
                placeholder={this.props.placeholder} 
                type={this.props.type} 
                name={this.props.name} 
                aria-label="Username" 
                aria-describedby="basic-addon1" />
            </div>
        )
    }
}
export default Cuadro_admin
