import React, {useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'reactstrap'

import TournamentForm from "../CreateTournamentComponent";

const CreateTournament = (
  // {token}
  ) => {

  let navigate = useNavigate();

  // useEffect(() => {
  //   if (!token) {
  //     navigate("/");
  //   }
  // })

    const tournament_data = (tournament) => {
        fetch('http://localhost:8080/api/create_tournamet', {
            method: 'POST',
            body: JSON.stringify(tournament),
            headers:{
              'Content-Type': 'application/json',
              // 'auth-token-jwt': token
            },
          })
          .then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => {
            navigate("/tournaments");
          });
    }

  return (
    <div className="container">
        <div className="site-section">
          <h3>Create Tournament</h3>
          <Row>
            <Col xs="6">
              <TournamentForm bus={tournament_data} />
            </Col>
          </Row>
        </div>
    </div>
  );
};

export default CreateTournament;
