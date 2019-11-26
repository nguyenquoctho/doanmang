import React, { Component } from 'react'
// import { Link, animateScroll as scroll } from "react-scroll";

import {Link} from "react-router-dom";
import SignUp from './SignUp';

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }
    handleToggle = () => {
        this.setState(state => ({
            isOpen: !state.isOpen
        }))
    }
    render() {
        return (
            <header>
                <div className="d-flex header--info">
                    <div className="header--contact ml-5 justify-content-center ">
                        <i className="fa fa-phone mr-3"></i>113-115-911
                    </div>
                    <ul className="header--signUp d-flex mb-0 mr-5">
                        <li className="nav-item">
                            <Link className="nav-link" to="/SignIn">Sign In </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"
                                onClick={() => {
                                    this.setState({ isOpen: true })
                                }}
                            >Sign Up </a>
                        </li>
                    </ul>
                </div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container ">
                        <img src="https://i.pinimg.com/474x/40/b7/48/40b74899c77de64cb42b4ab84085e75e.jpg" width="50px" height="50px" />
                        <a className="navbar-brand ml-3" href="#">Smart Room</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto ">
                                <li className="nav-item active">
                                    <Link 
                                    className="nav-link"
                                     to="/"
                                     spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration= {500}>Home</Link>
                                </li>
                                <li className="nav-item">
                                <Link
                                    activeClass="active"
                                    to="map"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration= {500}>Map</Link>
                                </li>
                                <li className="nav-item">
                                <Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration= {500}>Contact</Link>
                                </li>
                                
                                
                            </ul>
                        </div>
                    </div>
                    <SignUp
                        isOpen={this.state.isOpen}
                        onToggle={this.handleToggle} />
                </nav>
            </header>
        )
    }
}
