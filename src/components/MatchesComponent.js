import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Matches extends Component {

    constructor(props) {
        super (props);

        this.state = {
        }
    }

    render() {

        const matches = this.props.matches.map((match) => {
            return(
                <div className="widget-next-match">
                    <div className="widget-body mb-3">
                        <div className="widget-vs">
                            <div className="d-flex align-items-center justify-content-around justify-content-between w-100">
                                <div className="team-1 text-center">
                                    <Media object src={ match.image1 } alt={ match.team1} style={{ maxWidth: 150}}/>
                                    <h3>{ match.team1 }</h3>
                                </div>
                                <div>
                                    <span className="vs"><span>VS</span></span>
                                </div>
                                <div className="team-2 text-center">
                                    <Media object src={ match.image2 } alt={ match.team2} style={{ maxWidth: 150}}/>
                                    <h3>{ match.team2 } </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center widget-vs-contents mb-4">
                        <h4>{ match.cup }</h4>
                        <p className="mb-5">
                        <span className="d-block">{ match.date }</span>
                        <span className="d-block">{ match.hout }</span>
                        <strong className="text-danger">{ match.place }</strong>
                        </p>
                    </div>
                </div>               
            );
        });

        return (
            <div className="col-lg-6">
                <div className="widget-title">
                    <h3>Next Match</h3>
                </div>
                { matches }        
            </div>
        );
    }

}

export default Matches;