import React, { Component } from 'react'
import '../Sass/App.scss';
import '../Sass/Navbar.scss';
import ToggleMenu from  '../components/ToggleMenu';
import ScrollMenu from '../components/ScrollMenu';
import 'react-dom';



class Navbar extends Component {

    render() {
        return (
            <header>
                <div className = "container">

                    <ScrollMenu/>
 
                    <ToggleMenu/>

                </div>            

            </header>
        )
    }
}

export default Navbar;
