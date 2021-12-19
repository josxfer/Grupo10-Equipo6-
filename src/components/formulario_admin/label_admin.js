import React from "react";

class CuadroAdmin extends React.Component{
    render(){
        return(
            <div className="container">
                <label>{this.props.label}</label>
                <input
                className="form-control w-50" 
                placeholder={this.props.placeholder} 
                type={this.props.type} 
                name={this.props.name} 
                aria-label="Username"
                aria-describedby="basic-addon1" />
            </div>
        )
    }
}
export default CuadroAdmin;
