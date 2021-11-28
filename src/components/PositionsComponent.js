import React, { Component } from 'react';

class Positions extends Component {

    constructor(props) {
        super (props);

        this.state = {
        }
    }

    render() {

        const positions = this.props.teams.map((team) => {
            return(
                <tr>
                    <td>{team.position}</td>
                    <td><strong class="text-white">{team.name}</strong></td>
                    <td>{team.points}</td>
                </tr>
            );
        });

        return (
            <div class="col-lg-6">            
                <div class="widget-next-match">
                    <table class="table custom-table">
                        <thead>
                            <tr>
                                <th>Position</th>
                                <th>Team</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            {positions}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

export default Positions;