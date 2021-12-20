import React, {useEffect} from "react";
import { useNavigate } from 'react-router-dom';

import FormularioUsuario from "../FormularioUsuario";

const CrearUsuario = (
  // {token}
  ) => {

  let navigate = useNavigate();

  // useEffect(() => {
  //   if (!token) {
  //     navigate('/')
  //   }
  // })

  const datos_usuario = (usuario) => {
    fetch("http://localhost:8080/api/crear_usuario", {
      method: "POST",
      body: JSON.stringify(usuario),
      headers: {
        "Content-Type": "application/json",
        // 'auth-token-jwt': token
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        navigate("/usuario");
      });
  };

  return (
    <div className="container">
      <div className="site-section">
        <h3>Sign In</h3>
        <FormularioUsuario bus={datos_usuario} />
      </div>
    </div>
  );
};

export default CrearUsuario;
