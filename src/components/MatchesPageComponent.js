import React from "react";
import Matches from './MatchesComponent';
import { Button, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import JoinRequests from "./JoinRequestsComponent";

function MatchesPage({matches, teams}) {
    return(
        <div>
            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="widget-title">  
                                <Row>
                                    <Col xs="10">
                                        <h1>Matches</h1>
                                    </Col>
                                    <Col>
                                        <Link to="/newmatch"><Button color="primary"><span className="fa fa-edit"></span></Button></Link>
                                    </Col>
                                </Row>
                            </div>
                            <Matches matches={matches}/>
                        </div>
                        <div className="col-lg-6">
                            <JoinRequests teams={teams}/>
                        </div>  
                    </div>    
                </div>
            </div>
        </div>
    );
}

export default MatchesPage;