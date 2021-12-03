import React, { Component } from 'react';
import { Media } from 'reactstrap';


class VS extends Component {

    constructor(props) {
        super (props);

        this.state = {
        }

    }

    render() {

        const matches = this.props.matches.map((match) => {
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="d-flex team-vs">
                                <span className="score">{ match.result }</span>
                                    <div className="team-1 w-50">
                                        <div className="team-details w-100 text-center">
                                            <Media object src={ match.image1 } alt={ match.team1} style={{ maxWidth: 150}}/>
                                            <h3>{ match.team1 }</h3>
                                            <ul className="list-unstyled">
                                                <li>Anja Landry (7)</li>
                                                <li>Eadie Salinas (12)</li>
                                                <li>Ashton Allen (10)</li>
                                                <li>Baxter Metcalfe (5)</li>
                                            </ul>
                                        </div>
                                    </div>
                                <div className="team-2 w-50">
                                    <div className="team-details w-100 text-center">
                                        <Media object src={ match.image2 } alt={ match.team2} style={{ maxWidth: 150}}/>
                                        <h3>{ match.team2 } </h3>
                                        <ul className="list-unstyled">
                                            <li>Macauly Green (3)</li>
                                            <li>Arham Stark (8)</li>
                                            <li>Stephan Murillo (9)</li>
                                            <li>Ned Ritter (5)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div>
                { matches }        
            </div>
        );
    }
}

export default VS;