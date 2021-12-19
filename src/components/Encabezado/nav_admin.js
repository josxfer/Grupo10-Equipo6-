import React from "react";
import {Link} from "react-router-dom";

class Navegacion extends React.Component{

    render(){
        return(
        <nav className="navbar navbar-dark bg-dark">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link className="nav-link active text-black" aria-current="page" to={'/'}>{this.props.name}</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" to ={'/'} >Vistas</Link>
              <ul class="dropdown-menu">
                <li><Link className="dropdown-item text-black" to={'/Ingreso'}>Vista Usuario Interno</Link></li>
                <li><Link className="dropdown-item text-black" to={'/'}>Vista Usuario Externo</Link></li>
                <li><Link className="dropdown-item text-black" to={'/'}>Agregar usuario Interno</Link></li>
                <li><hr class="dropdown-divider"/></li>
                <li><Link className="dropdown-item text-black" to={'/'}>Salida Segura</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/'} >Usuarios Internos</Link>
            </li>
          </ul>
        </nav>)
    }
}
export default Navegacion;