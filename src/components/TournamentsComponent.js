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

  return (
    <div className="container">
        <div className="site-section">
      <h1>Tournaments</h1>
      <Tabla columnas={columnas} registros={tournaments} campos={campos_tournaments} bus={update_tournament}/>
    </div>
    </div>
  );
    
    return(
        <tr key={tournament.id}>
            <td className="text-white"><Link to="/matches">{tournament.name}</Link></td>
            <td><strong>{tournament.state}</strong></td>
            <td>
                <Row>
                <Col xs="3">
                    <Link to="/newtournament"><Button color="primary"><span className="fa fa-edit"></span></Button></Link>
                </Col>
                <Col>
                    <Button color="danger"><span className="fa fa-window-close"></span></Button>
                </Col>
                </Row>
            </td>
        </tr>
    );
    

    return (
        <div className="container">
            <div className="site-section">
                <h1>Tournaments</h1>
                <div className="widget-next-match">
                    <table className="table custom-table">
                        <thead>
                            <tr>
                                <th>Tournament</th>
                                <th>State</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            { ti }   
                        </tbody>   
                    </table>  
                </div>
            </div>
        </div>
    );
}

export default Tournament;