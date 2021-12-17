import React from "react";

class Navegacion extends React.Component{

    render(){
        return(
        <nav className="navbar navbar-dark bg-dark">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active text-black" aria-current="page" href="#">Vista Administador</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Vistas</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item text-black" href="#">Vista Usuario Interno</a></li>
                <li><a className="dropdown-item text-black" href="#">Vista Usuario Externo</a></li>
                <li><a className="dropdown-item text-black" href="#">Agregar usuario Interno</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item text-black" href="#">Salida Segura</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Usuarios Internos</a>
            </li>
          </ul>
        </nav>)
    }
}
export default Navegacion;