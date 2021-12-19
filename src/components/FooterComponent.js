import React from 'react';
import { Link } from 'react-router-dom'

function Footer(props) {
    return(

        <footer className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="widget mb-3">
                            <h3><Link to="/tournaments">Tournaments</Link></h3>
                            <ul className="list-unstyled links">
                                <li><a href="#">All</a></li>
                                <li><a href="#">Club News</a></li>
                                <li><a href="#">Media Center</a></li>
                                <li><a href="#">Video</a></li>
                                <li><a href="#">RSS</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="widget mb-3">
                            <h3><Link to="/matches">Matches</Link></h3>
                            <ul className="list-unstyled links">
                                <li><a href="#">Online Ticket</a></li>
                                <li><a href="#">Payment and Prices</a></li>
                                <li><a href="#">Contact &amp; Booking</a></li>
                                <li><a href="#">Tickets</a></li>
                                <li><a href="#">Coupon</a></li>
                            </ul>
                        </div>
                    </div>
                <div className="col-lg-3">
                    <div className="widget mb-3">
                        <h3><Link to="/positions">Positions</Link></h3>
                        <ul className="list-unstyled links">
                            <li><a href="#">Standings</a></li>
                            <li><a href="#">World Cup</a></li>
                            <li><a href="#">La Lega</a></li>
                            <li><a href="#">Hyper Cup</a></li>
                            <li><a href="#">World League</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="widget mb-3">
                        <h3>Social</h3>
                        <ul className="list-unstyled links">
                            <li><a href="https://twitter.com/worldcurling" target="_blank" rel="noopener noreferrer" className="btn btn-social-icon btn-twitter"><span className="fa fa-twitter"></span></a></li>
                            <li><a href="https://www.instagram.com/worldcurling/" target="_blank" rel="noopener noreferrer" className="btn btn-social-icon btn-instagram"><span className="fa fa-instagram"></span></a></li>
                            <li><a href="https://www.facebook.com/WorldCurlingFederation/" target="_blank" rel="noopener noreferrer" className="btn btn-social-icon btn-facebook"><span className="fa fa-facebook"></span></a></li>
                            <li><a href="https://www.linkedin.com/company/worldcurling/" target="_blank" rel="noopener noreferrer" className="btn btn-social-icon btn-linkedin"><span className="fa fa-linkedin"></span></a></li>
                            <li><a href="https://www.youtube.com/user/WorldCurlingTV" target="_blank" rel="noopener noreferrer" className="btn btn-social-icon btn-youtube"><span className="fa fa-youtube"></span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    );
}

export default Footer;