import React from "react";
import Positions from './PositionsComponent';

function PositionsPage({teams}) {
    return(
        <div>
            <div className="container">
                <div className="site-section">
                <h1>Positions</h1>
                <Positions teams={teams}/>
                </div>
            </div>
        </div>
    );
}

export default PositionsPage;