import React from "react";
import Positions from './PositionsComponent';

function PositionsPage({teams}) {
    return(
        <div>
            <div className="container">
                <h1>Positions</h1>
                <Positions teams={teams}/>
            </div>
        </div>
    );
}

export default PositionsPage;