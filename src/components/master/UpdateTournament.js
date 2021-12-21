import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";

import FormNewTournament from "../CreateTournamentComponent";

const UpdateTournament = (
    // {token}
    ) => {

    const navigate = useNavigate()

    useEffect(() => {
    //    if (!token) {
    //        navigate('/')
    //    }
    })

    const get_new_data = (id_tournament, data) => {
        console.log(data);
        fetch(`http://localhost:8080/api/update_tournament/${id_tournament}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json',
        //   'auth-token-jwt': token
        }
      })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(async response => {
        navigate('/usuario')
      });
    }

    return (
        <div className="container">
            <div className="site-section">
                <h1>Edit Tournament</h1>
                <FormNewTournament 
                    // token={token} 
                    bus={get_new_data}/>
            </div>
        </div>
    )
}

export default UpdateTournament