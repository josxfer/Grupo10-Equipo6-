import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Admin from "./components/Admin";
import FormularioMod from './components/Modificar_admin';
import Login from './components/Login/index';
import Registro from './components/Registro/Registro';

class App extends React.Component{

  render(){


    return(
      <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Admin /> } />
        <Route path={"/Modificar"} element={<FormularioMod/>}/>
        <Route path={"/Ingreso"} element={<Login /> } />
        <Route path={"/Registro"} element={<Registro /> } />
      </Routes>
      </BrowserRouter>
    )
  }
}
export default App