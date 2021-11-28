import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Positions extends Component {

    constructor(props) {
        super (props);

        this.state = {
        }
    }

    render() {

        const positions = this.props.teams.map((team) => {
            return(
                <tr key={ team.id } className="col-12 mt-5">
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