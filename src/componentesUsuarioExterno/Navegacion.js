import React from "react";
import {Link} from "react-router-dom";




class Navegacion extends React.Component{
  render(){
      return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"> ...</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/Inscripcion">Inscripcion</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Modificar">Modificar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Resultados">Resultados-Fechas</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
      )
  }
}

export default Navegacion;










