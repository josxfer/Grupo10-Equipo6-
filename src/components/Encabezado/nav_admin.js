import React from "react";
import {Link} from "react-router-dom";

class Navegacion extends React.Component{

    render(){
        return(
        <nav class="navbar navbar-dark bg-dark">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <Link className="nav-link active text-black" aria-current="page" to={'/'}>{this.props.name}</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">Vistas</a>
              <ul class="dropdown-menu">
                <li><Link className="dropdown-item text-black" to={'/Ingreso'}>Vista Usuario Interno</Link></li>
                <li><Link className="dropdown-item text-black" to={'/'}>Vista Usuario Externo</Link></li>
                <li><Link className="dropdown-item text-black" to={'/'}>Agregar usuario Interno</Link></li>
                <li><hr class="dropdown-divider"/></li>
                <li><Link className="dropdown-item text-black" to={'/'}>Salida Segura</Link></li>
              </ul>
            </li>
            <li class="nav-item">
              <lLink className="nav-link" to={'/'} >Usuarios Internos</lLink>
            </li>
          </ul>
        </nav>)
    }
}
export default Navegacion;