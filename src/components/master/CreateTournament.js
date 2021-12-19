import React, {useEffect} from "react";
import { useNavigate } from 'react-router-dom';

import TournamentForm from "../NewTournamentComponent";

const CreateTournament = ({token}) => {

  let navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  })

    const tournament_data = (tournament) => {
        fetch('http://localhost:8080/api/create_tournament', {
            method: 'POST',
            body: JSON.stringify(tournament),
            headers:{
              'Content-Type': 'application/json',
              'auth-token-jwt': token
            }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => {
            navigate("/tournament");
          });
    }

  return (
    <div>
        <h3>Bienvenido al formulario para crear fruta</h3>
        <TournamentForm bus={datos_fruta} />
    </div>
  );
};

export default CreateTournament;
