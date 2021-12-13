import React from "react";
import { Button, Col, Row } from "reactstrap";
import { Link } from 'react-router-dom'

const TournamentItem = (props) => {
    const ti = props.tournaments.map((tournament) => {
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
    });

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

export default TournamentItem;