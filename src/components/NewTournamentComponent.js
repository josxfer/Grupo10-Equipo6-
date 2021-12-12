import React, { Component } from 'react';
import { Button, Label, Col, Row,  } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

// const required = (val) => val && val.length;
// const maxLength = (len) => (val) => !(val) || (val.length <= len);
// const minLength = (len) => (val) => (val) && (val.length >= len);
// const isNumber = (val) => !isNaN(Number(val));

class NewTournament extends Component {

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
                        <h1>New Tournament</h1>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="tournamentname" md={2}>Tournament Name</Label>
                                <Col md={10}>
                                    <Control.text model=".tournamentname" id="tournamentname" name="tournamentname" placeholder="Tournament Name" className="form-control" 
                                    // validators={{ required, minLength: minLength(3), maxLength: maxLength(15)}}
                                    />
                                    {/* <Errors className="text-danger" model=".tournamentname" show="touched" message={{required: 'Required', minLength: 'Must be greater than 2 charaters', maxLength: 'Must be 15 characters or less'}}/> */}
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="place" md={2}>Place</Label>
                                <Col md={10}>
                                    <Control.text model=".place" id="place" name="place" placeholder="Place" className="form-control" 
                                    // validators={{ required, minLength: minLength(3), maxLength: maxLength(15)}}
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
                                <Label htmlFor="numberofteams" md={2}>Number of Teams</Label>
                                <Col md={10}>
                                    <Control.text model=".numberofteams" id="numberofteams" name="numberofteams" placeholder="Number of Teams" className="form-control" 
                                    // validators={{ required, isNumber }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="prize" md={2}>Prize</Label>
                                <Col md={10}>
                                    <Control.text model=".prize" id="prize" name="prize" placeholder="Prize" className="form-control" 
                                    // validators={{ required, minLength: minLength(3), maxLength: maxLength(15)}}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset:2}}>
                                    <Button type="submit" id="submitform" color="danger">
                                        Create Tournament
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

export default NewTournament;