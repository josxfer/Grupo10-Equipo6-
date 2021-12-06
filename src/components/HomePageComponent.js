import React from "react";
import VS from './VSComponent';
import Matches from './MatchesComponent';
import Positions from './PositionsComponent';

function HomePage({matches, teams}) {

    return(
        <div>
            <VS matches={matches}/>
            <div className="site-section bg-dark">
                <div className="container">
                    <h1>Welcome</h1>    
                    <div className="row">  
                        <div className="col-lg-6">
                            <div className="widget-title">  
                                <h3>Next Match</h3>
                            </div>
                            <Matches matches={matches}/>
                        </div>
                        <div className="col-lg-6">   
                            <Positions teams={teams}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container site-section">
    
            </div>
        </div>
        
    );
}

export default HomePage;