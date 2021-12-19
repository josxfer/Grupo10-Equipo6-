import React from "react";
import Datos from "./Datos";
import 'bootstrap/dist/css/bootstrap.min.css';


class Formulario extends React.Component{
  render(){
      return(
         <div>
             <form className="row g-3 col-12 form-group">
                <div className="col-5">
                  <label for="inputAddress2" className="form-label">Nombre del equipo</label>
                  <input type="text" className="form-control" id="inputAddress2" placeholder="..."/>
                </div>
                
                <Datos/>

                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                    <label className="form-check-label" for="gridCheck">
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