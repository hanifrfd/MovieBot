import React, { Component } from 'react'
import './Navbar.css';

import $ from 'jquery';

export class Navbar extends Component {
    constructor(props){
        super();
        this.state = {
            position : "relative",
            height : "100px",
            backgroundColor : ""
        }

        this._onScroll = this._onScroll.bind(this)
    }

    _onScroll = (e) => {
        if ($(window).scrollTop() > 80) {
            this.setState({
                position: "fixed",
                height : "80px",
                backgroundColor : "#353434"
            })            
        }else{
            this.setState({
                position: "relative",
                height : "100px",
                backgroundColor : ""
            })
        }  
    }
    
    componentDidMount() {        
        window.addEventListener('scroll', this._onScroll)
    }

    render() {
        return (
            <div id='navbar' style={{position: this.state.position, height: this.state.height, backgroundColor: this.state.backgroundColor}}>
                <div id="logo">
                    <p>Movie<span className="bold">Bot</span></p>
                </div>
                <nav id="nav">                    
                    <ul className="navigation light">
                        <li className="nav-link"><a href="#Home">Home</a></li>
                        <li className="nav-link"><a href="#latest-movie">Now Playing</a></li>
                        <li className="nav-link"><a href="#other-movies">Other Movie</a></li>
                        <li className="nav-link"><a href="#about">About</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar
