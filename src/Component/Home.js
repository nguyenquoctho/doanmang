import React, { Component } from 'react'
import Header from './Header'
import Carousel from './Carousel'
import Welcome from './Welcome'
import Intro from './Intro'
import Location from './Location'
import Footer from './Footer'

import { Link, animateScroll as scroll } from "react-scroll";

export default class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        }
    }
    scrollToTop = () => {
        scroll.scrollToTop(); 
    };
    render() {
        return (
            <div>
                <Header />
                <Carousel/>
                <Welcome/>
                <Intro/>
                <Location />
                <Footer />
                <i 
                className="backtotop fa fa-angle-double-up"
                onClick={this.scrollToTop} />
            </div>
        )
    }
}
