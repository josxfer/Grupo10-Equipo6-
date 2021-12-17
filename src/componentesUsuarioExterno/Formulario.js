import React from "react";
import Datos from "./Datos";
import 'bootstrap/dist/css/bootstrap.min.css';


class Formulario extends React.Component{
  render(){
      return(
         <div>
             <form class="row g-3 col-12 form-group">
                <div class="col-5">
                  <label for="inputAddress2" class="form-label">Nombre del equipo</label>
                  <input type="text" class="form-control" id="inputAddress2" placeholder="..."/>
                </div>
                
                <Datos/>

                <div class="col-12">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck"/>
                    <label class="form-check-label" for="gridCheck">
                      Acepto terminos y condiciones
                    </label>
                  </div>
                </div>
              </form>
         </div>
      )
  }
}

export default Formulario