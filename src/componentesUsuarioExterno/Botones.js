import React from "react";


class Botones extends React.Component{
  render(){
      return(
         <div style={
           {
             margin:'5px 5px 5px 5px',

           }
         }>
            <button type="button" className="btn btn-danger">{this.props.boton}</button>
         </div>
      )
  }
}

export default Botones;