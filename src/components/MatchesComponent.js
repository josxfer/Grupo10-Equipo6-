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
                    <div class="widget-title">
                        <h3>Next Match</h3>
                    </div>
                    <div class="widget-body mb-3">
                        <div class="widget-vs">
                            <div class="d-flex align-items-center justify-content-around justify-content-between w-100">
                                <div class="team-1 text-center">
                                    <Media object src={ match.image1 } alt={ match.team1} style={{ maxWidth: 150}}/>
                                    <h3>{ match.team1 }</h3>
                                </div>
                                <div>
                                    <span class="vs"><span>VS</span></span>
                                </div>
                                <div class="team-2 text-center">
                                    <Media object src={ match.image2 } alt={ match.team2} style={{ maxWidth: 150}}/>
                                    <h3>{ match.team2 } </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center widget-vs-contents mb-4">
                        <h4>{ match.cup }</h4>
                        <p class="mb-5">
                        <span class="d-block">{ match.date }</span>
                        <span class="d-block">{ match.hout }</span>
                        <strong class="text-primary">{ match.place }</strong>
                        </p>
                    </div>
                </div>               
            );
        });

        return (
            <div className="col-lg-6">
                { matches }        
            </div>
        );
    }

}

export default Matches;