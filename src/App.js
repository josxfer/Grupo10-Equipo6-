import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Admin from "./components/admin";
import Formulario_mod from './components/modificar_admin/index';
import Login from './components/login/index';
import Registro from './components/Registro/Registro'

class App extends React.Component{

  render(){


    return(
      <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Admin/>}/>
        <Route path={"/Modificar"} element={<Formulario_mod/>} />
        <Route path={"/Ingreso"} element={<Login/>}/>
        <Route path={"/Registro"} element={<Registro/>}/>
      </Routes>
      </BrowserRouter>
    )
}
}
export default App