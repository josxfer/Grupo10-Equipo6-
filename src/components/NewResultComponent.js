import React, { Component } from 'react';
import { Button, Label, Col, Row, Input } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

// const required = (val) => val && val.length;
// const isNumber = (val) => !isNaN(Number(val));

class NewResult extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));
    }

    render() {
        return(
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                        <h1>Results Information</h1>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="team1result" md={2}>Result Team 1</Label>
                                <Col md={10}>
                                    <Control.text model=".team1result" id="team1result" name="team1result" placeholder="Team 1 Result " className="form-control" 
                                    // validators={{ required, isNumber }}
                                    />
                                    {/* <Errors className="text-danger" model=".team1" show="touched" message={{required: 'Required'}}/> */}
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="team2result" md={2}>Result Team 2</Label>
                                <Col md={10}>
                                    <Control.text model=".teamteam2result2" id="team2result" name="team2result" placeholder="Team 2 Result" className="form-control" 
                                    // validators={{ required, isNumber }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset:2}}>
                                    <Button type="submit" id="submitform" color="danger">
                                        Save Result
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>

                </div>
            </div>
        )
    }

}

export default NewResult;