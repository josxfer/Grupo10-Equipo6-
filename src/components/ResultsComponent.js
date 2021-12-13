import React from "react";
import VS from './VSComponent';
import { Button, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

function Result ({matches}) {
    return(          
        <div className="container">          
            <Row className="site-section">
                <Col xs="11">
                    <h1>Results</h1>
                </Col>
                <Col>
                    <Link to="/newresult"><Button color="primary"><span className="fa fa-edit"></span></Button></Link>
                </Col>
            </Row>
            <div className="site-section">
                <VS matches={matches}/>        
            </div>
        </div>    
        
    );
}

export default Result;