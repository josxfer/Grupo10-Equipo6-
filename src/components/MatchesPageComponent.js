import React from "react";
import Matches from './MatchesComponent';

function MatchesPage({matches}) {
    return(
        <div>
            <div className="site-section bg-dark">
    
            </div>
            <div className="container">
                <div className="widget-title">  
                    <h1>Matches</h1>
                </div>
                <Matches matches={matches}/>
            </div>
        </div>
    );
}

export default MatchesPage;