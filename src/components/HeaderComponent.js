import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Card, CardImg, CardImgOverlay,} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }


    render () {
        return(
            <div>
                <Card inverse className="text-center">
                    <div className="site-navbar py-4" role="banner">
                    <div className="d-flex justify-content-center">
                    <Navbar dark expand="md">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr auto" href="/home">
                            <img src="assets/images/curling-logo-dark.png" height="30" alt="Curling Logo"/>
                            Curling Tournaments
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav navbar>
                                <NavItem >
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/tournaments">
                                        <span className="fa fa-trophy"></span> Tournaments
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/matches">
                                        <span className="fa fa-fire"></span> Matches
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/positions">
                                        <span className="fa fa-child"></span> Positions
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/results">
                                        <span className="fa fa-list"></span> Results
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                    </div>
                    </div>
                    <CardImg alt="Card image cap" src="assets/images/pexels-shvets-production-dark.jpg" width="100%"/>
                    
                        <CardImgOverlay className="d-flex align-items-center">
                            <div className="justify-content-end col-lg-5 ml-auto">
                                    <h1>World Cup Event</h1>
                                    <p>Curling is a team sport, played on ice, where two teams take it in turns to slide stones made of granite towards a target – known as a House. It is an Olympic and Paralympic winter sport with medal disciplines for Women’s, Men’s, Mixed Doubles and mixed Wheelchair teams.</p>
                                    <p>
                                        <Link to="/newtournament" className="btn btn-danger py-3 px-4 mr-3">New Tournamet</Link>
                                    </p>  
                            </div>   
                        </CardImgOverlay>
                    
                </Card>
            </div>
        );
    }
}

export default Header;