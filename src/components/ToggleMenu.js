import React, { Component } from 'react'
import 'react-dom';
import {Link} from 'react-router-dom';

class ToggleMenu extends Component {

    onClickToggleClose = (e) => {
        document.getElementById('toggleMenu').style.top = "-326px";
    }

    render() {
        return (
            <div className = "toggle-menu" id = "toggleMenu">

                <ul className = "toggle-menu-list container">

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
                    <hr/>
                    <div className = "login-register-caption nav">
                        <Link to = '/register' className = "sign go-to-btn">Sign Up</Link>
                        <Link to = '/login' className = "sign btn menu-item">Sign In</Link>
                    </div>

                </ul>
            </div>
        )
    }
}

export default ToggleMenu;