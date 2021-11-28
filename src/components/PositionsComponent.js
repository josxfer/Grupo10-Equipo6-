import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Positions extends Component {

    constructor(pops) {
        super (pops);

        this.state = {
            teams: [
                {
                    id: 0,
                    position: 1,
                    name: 'Bears',
                    image: 'assets/images/bears.png',
                    points: 140,
                },
                {
                    id: 1,
                    position: 2,
                    name: 'Lions',
                    image: 'assets/images/lions.png',
                    points: 130,
                },
                {
                    id: 3,
                    position: 4,
                    name: 'UC',
                    image: 'assets/images/uc.png',
                    points: 120,
                },
                {
                    id: 4,
                    position: 5,
                    name: 'Wildcats',
                    image: 'assets/images/wildcats.png',
                    points: 110,
                },
            ]
        }
    }

    render() {

        const positions = this.state.teams.map((team) => {
            return(
                    <tr>
                        <th scope="row">
                            { team.position }
                        </th>
                        <td className="text-white text-center">
                            <Media object src={ team.image } alt={ team.name }  style={{ maxWidth: 200 }}/><br/>
                            { team.name } 
                        </td>
                        <td>
                            { team.points }                    
                        </td>
                    </tr>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <table className="table"> 
                            <thead>
                                <tr>
                                    <th>
                                        Position
                                    </th>
                                    <th>
                                        Team
                                    </th>
                                    <th>
                                        Points
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                { positions }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> 
        );
    }

}

export default Positions;