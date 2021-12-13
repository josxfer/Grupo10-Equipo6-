import React from "react";
import { Button, Col, Row } from "reactstrap";
import { Link } from 'react-router-dom'

const JoinRequests = (props) => {
    const jr = props.teams.map((team) => {
        return(
            <tr key={team.id}>
                <td className="text-white">{team.name}</td>
                <td>
                    <Row>
                    <Col xs="3">
                        <Link to="/newtournament"><Button color="success"><span className="fa fa-check-square"></span></Button></Link>
                    </Col>
                    <Col>
                        <Button color="danger"><span className="fa fa-window-close"></span></Button>
                    </Col>
                    </Row>
                </td>
            </tr>
        );
    });

    return (
        <div className="container">
            <div className="site-section">
                <h1>Join Requests</h1>
                <div className="widget-next-match">
                    <table className="table custom-table">
                        <thead>
                            <tr>
                                <th>Team</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            { jr }   
                        </tbody>   
                    </table>  
                </div>
            </div>
        </div>
    );
}

export default JoinRequests;