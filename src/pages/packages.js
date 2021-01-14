import React, { Component } from 'react'
import '../Sass/Packages.scss';
import Price1 from '../images/price1.svg';
import Price2 from '../images/price2.svg';
import Price3 from '../images/price3.svg';
import About1 from '../images/about1.png';
import About2 from '../images/about2.png';
import {Link} from 'react-router-dom';

class packages extends Component {
    render() {
        return (
            <div className = "packages-caption">

                <div className = "section-title opacity-animation container">
                    <h2>Choose plan which fit for you</h2>
                    <p className = "text-center">
                        Supercharge your WordPress hosting with detailed website analytics, marketing tools. 
                        Our experts are just part of the reason Bluehost is the ideal home for your WordPress website. 
                        We're here to help you succeed!
                    </p>
                </div>

                <div className ="container">
                    <div className ="packages-content opacity-animation row">

                        <div className ="my-pack col-12 col-md-6 col-lg-3">
                            <img src={Price1} alt="price icon"/>
                            <h4 className = "price-head">Shared Hosting</h4>
                            <span>Starting at</span>
                            <h4 className = "price-total">$4.67 <sub>/ month</sub></h4>
                            <hr/>
                            <ul className ="pack-list">
                                <li>2 TB of space</li>
                                <li>unlimited bandwidth</li>
                                <li>full backup systems</li>
                                <li>free domain</li>
                                <li>unlimited database</li>
                            </ul>
                            <Link to = '/register' className = "go-to-btn">Get Started</Link>
                        </div>

                        <div className ="my-pack col-12 col-md-6 col-lg-3">
                            <img src={Price2} alt="price icon"/>
                            <h4 className = "price-head">Dedicated Hosting</h4>
                            <span>Starting at</span>
                            <h4 className = "price-total">$4.67 <sub>/ month</sub></h4>
                            <hr/>
                            <ul className ="pack-list">
                                <li>2 TB of space</li>
                                <li>unlimited bandwidth</li>
                                <li>full backup systems</li>
                                <li>free domain</li>
                                <li>unlimited database</li>
                            </ul>
                            <Link to = '/register' className = "go-to-btn">Get Started</Link>
                        </div>

                        <div className ="my-pack col-12 col-md-6 col-lg-3">
                            <img src={Price3} alt="price icon"/>
                            <h4 className = "price-head">Cloud Hosting</h4>
                            <span>Starting at</span>
                            <h4 className = "price-total">$4.67 <sub>/ month</sub></h4>
                            <hr/>
                            <ul className ="pack-list">
                                <li>2 TB of space</li>
                                <li>unlimited bandwidth</li>
                                <li>full backup systems</li>
                                <li>free domain</li>
                                <li>unlimited database</li>
                            </ul>
                            <Link to = '/register' className = "go-to-btn">Get Started</Link>
                        </div>

                    </div>
                </div>

                <div className = "about-content">

                    <div className ="about-one about-in container">
                        <div className = "about-caption">
                            <h2>Global server location</h2>
                            <p>
                                Supercharge your WordPress hosting with detailed website analytics, marketing tools. 
                                Our experts are just part of the reason Bluehost is the ideal home for your WordPress website. We're here to help you succeed!
                            </p>
                            <ul>
                                <li>WordPress hosting with detailed website</li>
                                <li>Our experts are just part of the reason</li>
                                <li>Detailed website analytics</li>
                            </ul>
                        </div>

                        <img src={About1} className ="image-fluid" alt="about"/>
                    </div>
                    
                    <div className ="about-two about-in container">
                        <div className = "about-caption">
                            <h2>Dedicated support</h2>
                            <p>
                                Supercharge your WordPress hosting with detailed website analytics, marketing tools. 
                                Our experts are just part of the reason Bluehost is the ideal home for your WordPress website. We're here to help you succeed!
                            </p>
                            <ul>
                                <li>WordPress hosting with detailed website</li>
                                <li>Our experts are just part of the reason</li>
                                <li>Detailed website analytics</li>
                            </ul>
                        </div>

                        <img src={About2} className ="image-fluid" alt="about"/>
                    </div>

                </div>

            </div>
        )
    }
}

export default packages;