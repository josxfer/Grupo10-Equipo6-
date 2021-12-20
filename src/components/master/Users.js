import React, { useState, useEffect } from "react";
import { Button } from 'reactstrap';
import { Link, useNavigate } from "react-router-dom";

import Tabla from "../TableComponent";

const Usuario = (
    // {token}
    ) => {
  const [usuarios, setUsuarios] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    // if (!token) {
    //   navigate('/')
    // }
    obtener_usuarios();
  });

  const obtener_usuarios = () => {
    fetch("http://localhost:8080/api/get_usuarios", {
      method: 'GET',
      headers: {
        // 'auth-token-jwt': token
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setUsuarios(data);
      });
  };

  const actualizar_usuario = (id_usuario) => {
    navigate(`/actualizar_usuario/${id_usuario}`)
  }

  const columnas = [
    "Name",
    "Email",
    "Access",
    "Action"
  ];

  const campos_usuario = [
    "nombre",
    "correo",
    "acceso",
  ];

  return (
    <div className="container">
        <div className="site-section">
      <h1>Users</h1>
      <Tabla columnas={columnas} registros={usuarios} campos={campos_usuario} bus={actualizar_usuario}/>
      <Link to="/crear_usuario"><Button color="success"><span className="fa fa-plus-square"></span> New User</Button></Link>
      <Link to='/dashboard'>Dashboard</Link>
      </div>
    </div>
  );
};

export default Usuario;
