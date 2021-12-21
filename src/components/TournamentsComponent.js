import React, { useState, useEffect } from "react";
import { Button, Col, Row } from "reactstrap";
import { Link, useNavigate } from 'react-router-dom'
import Tabla from "./TableComponent";

const Tournament = (
    // {token}
    ) => {
  const [tournaments, setTournaments] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    // if (!token) {
    //   navigate('/')
    // }
    get_tournaments();
  });

  const get_tournaments = () => {
    fetch("http://localhost:8080/api/get_tournaments", {
      method: 'GET',
      headers: {
        // 'auth-token-jwt': token
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setTournaments(data);
      });
  };

  const update_tournament = (id_tournament) => {
    navigate(`/update_tournament/${id_tournament}`)
  }

  const columnas = [
    "Tournament",
    "State",
    "Action",
  ];

  const campos_tournaments = [
    "name",
    "state"
  ];

  const delete_tournament = (id_tournament) => {
    fetch(`http://localhost:8080/api/delete_tournament/${id_tournament}`, {
        method: 'DELETE',
        headers:{
          'Content-Type': 'application/json',
          // 'auth-token-jwt': token
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        get_tournaments()
      });
  };

  return (
    <div className="container">
        <div className="site-section">
      <h1>Tournaments</h1>
      <Tabla columnas={columnas} registros={tournaments} campos={campos_tournaments} bus={delete_tournament }/>
    </div>
    </div>
  );
}

export default Tournament;