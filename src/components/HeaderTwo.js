import React, { Component } from 'react'
import imgHero from '../images/hero_right.png';
import {Link} from 'react-router-dom';

class HeaderTwo extends Component {
    render() {
        return (
            <div className = "header-two container">
                <div className = "hero-caption">
                    <span>Best Domain & hosting service provider</span>
                    <h1>Powerful web hosting</h1>
                    <p>
                        Supercharge your WordPress hosting with detailed
                        website analytics, marketing tools, security, and data
                        backups all in one place.
                    </p>
                    <Link to = '/register' className = "btn go-to-btn">Get Started</Link>
                </div>

                <div className = "hero-img">
                     <img src={imgHero} alt = "Image Hero"/>
                </div>
            </div>
        )
    }
}

export default HeaderTwo;