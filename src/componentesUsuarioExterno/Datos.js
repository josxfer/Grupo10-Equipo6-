import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


class Datos extends React.Component{
  
  render(){
      return(
         <div class="col-12">
             <form class="row g-3 col-12">
                
                
                <div class="col-md-4">
                  <label for="inputEmail4" class="form-label">Numero del jugador</label>
                  <input type="email" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">Nombre completo del jugador</label>
                  <input type="password" class="form-control" id="inputPassword4"/>
                </div>
                
                <div class="col-md-3">
                  <label for="inputCity" class="form-label">Edad</label>
                  <input type="text" class="form-control" id="inputCity"/>
                </div>
                <div class="col-md-3">
                  <label for="inputState" class="form-label">Tipo de documento</label>
                  <select id="inputState" class="form-select dropdown-menu-dark">
                    <option selected>Seleccione un documento</option>
                    <option >Cedula de Ciudadania</option>
                    <option>Cedula de extranjeria</option>
                    <option>Tarjeta de identidad</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <label for="inputZip" class="form-label">Numero de documento</label>
                  <input type="text" class="form-control" id="inputZip"/>
                </div>

              </form>
         </div>
      )
  }
}

export default Datos;