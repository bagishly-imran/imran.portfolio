import React, { Component } from 'react'
import ToggleMenu from './ToggleMenu';
import Logo from '../images/logo.png';
import {Link} from 'react-router-dom';
import $ from 'jquery';

class ScrollMenu extends Component {
   
    state = {
        menuOpen : true,
    }

    onClickMenu = (e) => {

        const {menuOpen} = this.state;

        this.setState({
            menuOpen : !this.state.menuOpen
        }) 

        if(menuOpen === true) {
            $("#toggleMenu").css("top", "52px");
            $(".navbar-menu").css("left", "0px");
            $(".fa-bar").css("top", "17px");
            $(".dsp-nne").css("display", "none");
            $(".degre-plus").css("transform", "rotate(45deg)");
            $(".degre-minus").css("transform", "rotate(-45deg)");
            $(".menu-func-button").css("background-color", "#051200");
        } else {
            $("#toggleMenu").css("top", "-326px");
            $(".dsp-nne").css("display", "block");
            $(".dsp-nne").css("top", "16px");
            $(".degre-plus").css("transform", "rotate(0deg)");
            $(".degre-plus").css("top", "11px");
            $(".degre-minus").css("transform", "rotate(0deg)");
            $(".degre-minus").css("top", "21px");
            $(".menu-func-button").css("background-color", "");
        } 
    }

    render() {
        return (
            <div className = "scroll-menu" id = "navbar-menu">
                <div className = "header-one nav container">
                    <Link to = '/' className = "logo">
                        <img src = {Logo} alt = "logo"/>
                    </Link>

                    <ul className = "menu-list nav">
                        <Link to = '/'>
                            <li className = "menu-item">Home</li>
                        </Link>
                        <Link to = '/packages'>
                            <li className = "menu-item">Packages</li>
                        </Link>
                        <Link to = '/help'>
                            <li className = "menu-item">Help</li>
                        </Link>
                        <Link to = '/contact'>
                            <li className = "menu-item">Contact</li>
                        </Link>
                    </ul>

                    <div className = "login-register-btn-content nav">
                        <Link to = '/register' className = "sign go-to-btn">Sign Up</Link>
                        <Link to = '/login' className = "sign btn menu-item">Sign In</Link>
                    </div>


                    <div className="btns">
                        <button onClick = {this.onClickMenu} type="button" className="menu-func-button open-menu" id="funcButton" title="Menyu">
                            <div className="fa-bar degre-plus"></div>
                            <div className="fa-bar dsp-nne"></div>
                            <div className="fa-bar degre-minus"></div>
                        </button>
                    </div>

                    <ToggleMenu/>
 
                </div>
            </div>
        )
    }
}

export default ScrollMenu;
