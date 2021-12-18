import React from "react";

class Navegacion extends React.Component{

    render(){
        return(
        <nav class="navbar navbar-dark bg-dark">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a className="nav-link active text-black" aria-current="page" href="#">Vista Administador</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Vistas</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item text-black" href="#">Vista Usuario Interno</a></li>
                <li><a class="dropdown-item text-black" href="#">Vista Usuario Externo</a></li>
                <li><a class="dropdown-item text-black" href="#">Agregar usuario Interno</a></li>
                <li><hr class="dropdown-divider"/></li>
                <li><a class="dropdown-item text-black" href="#">Salida Segura</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Usuarios Internos</a>
            </li>
          </ul>
        </nav>)
    }
}
export default Navegacion;