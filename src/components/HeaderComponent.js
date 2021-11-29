import { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, Card, CardImg, CardImgOverlay,} from 'reactstrap';

class Header extends Component {
    render () {
        return(
            <div>
                <Card inverse>
                    <div class="site-navbar py-4" role="banner">
                    <Navbar>
                        <div className="container">
                            <header class="site-navbar py-4" role="banner">
                                <div class="container">
                                    <div class="d-flex align-items-center">
                                        <div class="site-logo">
                                            <a href="index.html">
                                                
                                            </a>
                                        </div>
                                        <div class="ml-auto">
                                            <nav class="site-navigation position-relative text-right" role="navigation">
                                                <ul class="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                                                <li class="active"><a href="index.html" class="nav-link">Home</a></li>
                                                <li><a href="matches.html" class="nav-link">Matches</a></li>
                                                <li><a href="players.html" class="nav-link">Players</a></li>
                                                <li><a href="blog.html" class="nav-link">Blog</a></li>
                                                <li><a href="contact.html" class="nav-link">Contact</a></li>
                                                </ul>
                                            </nav>

                                            <a href="#" class="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right text-white"><span class="icon-menu h3 text-white"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </header>
                            <NavbarBrand href="/">Curling Tournaments</NavbarBrand>
                        </div>
                    </Navbar>
                    </div>
                    <CardImg alt="Card image cap" src="assets/images/pexels-shvets-production.jpg" width="100%"/>
                    
                        <CardImgOverlay className="d-flex align-items-center">
                            <div class="justify-content-end col-lg-5 ml-auto">
                                    <h1 class="text-white">World Cup Event</h1>
                                    <p>Curling is a team sport, played on ice, where two teams take it in turns to slide stones made of granite towards a target – known as a House. It is an Olympic and Paralympic winter sport with medal disciplines for Women’s, Men’s, Mixed Doubles and mixed Wheelchair teams.</p>
                                    <p>
                                        <a href="#" class="btn btn-danger py-3 px-4 mr-3">Create Tournamet</a>
                                        <a href="#" class="more light">Learn More</a>
                                    </p>  
                            </div>   
                        </CardImgOverlay>
                    
                </Card>
            </div>
        );
    }
}

export default Header;