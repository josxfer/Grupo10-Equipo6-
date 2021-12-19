import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


class Datos extends React.Component{
  
  render(){
      return(
         <div className="col-12">
             <form className="row g-3 col-12">
                
                
                <div className="col-md-4">
                  <label for="inputEmail4" className="form-label">Numero del jugador</label>
                  <input type="email" className="form-control" id="inputEmail4"/>
                </div>
                <div className="col-md-6">
                  <label for="inputPassword4" className="form-label">Nombre completo del jugador</label>
                  <input type="password" className="form-control" id="inputPassword4"/>
                </div>
                
                <div className="col-md-3">
                  <label for="inputCity" className="form-label">Edad</label>
                  <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="col-md-3">
                  <label for="inputState" className="form-label">Tipo de documento</label>
                  <select id="inputState" className="form-select dropdown-menu-dark">
                    <option selected>Seleccione un documento</option>
                    <option >Cedula de Ciudadania</option>
                    <option>Cedula de extranjeria</option>
                    <option>Tarjeta de identidad</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label for="inputZip" className="form-label">Numero de documento</label>
                  <input type="text" className="form-control" id="inputZip"/>
                </div>

              </form>
         </div>
      )
  }
}

export default Datos;