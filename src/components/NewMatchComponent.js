import React, { Component } from 'react';
import { Button, Label, Col, Row, Input } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

// const required = (val) => val && val.length;
// const isNumber = (val) => !isNaN(Number(val));

class NewMatch extends Component {

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
                        <h1>Match Information</h1>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="team1" md={2}>Team 1</Label>
                                <Col md={10}>
                                    <Control.text model=".team1" id="team1" name="team1" placeholder="Team 1 " className="form-control" 
                                    // validators={{ required }}
                                    />
                                    {/* <Errors className="text-danger" model=".team1" show="touched" message={{required: 'Required'}}/> */}
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="team2" md={2}>Team 2</Label>
                                <Col md={10}>
                                    <Control.text model=".team2" id="team2" name="team2" placeholder="Team 2" className="form-control" 
                                    // validators={{ required }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="date" md={2}>Date</Label>
                                <Col md={10}>
                                    <Control.text model=".date" id="date" name="date" placeholder="Date" className="form-control"/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="hour" md={2}>Hour</Label>
                                <Col md={10}>
                                    <Control.text model=".hour" id="hour" name="hour" placeholder="Hour" className="form-control" 
                                    // validators={{ required }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="place" md={2}>Place</Label>
                                <Col md={10}>
                                    <Control.text model=".place" id="place" name="place" placeholder="Place" className="form-control" 
                                    // validators={{ required }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset:2}}>
                                    <Button type="submit" id="submitform" color="danger">
                                        Save Match
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

export default NewMatch;