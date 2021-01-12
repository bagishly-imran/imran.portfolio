import React, { Component } from 'react'
import '../Sass/Index.scss';
import ServiceOne from '../images/services1.svg';
import ServiceTwo from '../images/services2.svg';
import ServiceThere from '../images/services3.svg';
import ServiceFour from '../images/services4.svg';
import ServiceFive from '../images/services5.svg';
import ServiceSix from '../images/services6.svg';
import {Link} from 'react-router-dom';

class IndexFeatures extends Component {
    render() {
        return (
            <div className = "features-caption container">

                <h2 className = "features-about">Most amazing features</h2>

                <div className = "features-content  nav justify-content-around">

                    <div className ="my-features col-12 col-sm-6 col-md-4">
                        <img  src ={ServiceOne} alt ="services"/>
                        <Link to = '/packages'>Employee Owned</Link>
                        <p>
                            Supercharge your WordPress hosting with detailed website analytics, marketing tools.
                        </p>
                    </div>
                    <div className ="my-features col-12 col-sm-6 col-md-4">
                        <img  src ={ServiceTwo} alt ="services"/>
                        <Link to = '/packages'>Commitment To Security</Link>
                        <p>
                            Supercharge your WordPress hosting with detailed website analytics, marketing tools.
                        </p>
                    </div>
                    <div className ="my-features col-12 col-sm-6 col-md-4">
                        <img  src ={ServiceThere} alt ="services"/>
                        <Link to = '/packages'>Passion For Privacy</Link>
                        <p>
                            Supercharge your WordPress hosting with detailed website analytics, marketing tools.
                        </p>
                    </div>
                    <div className ="my-features col-12 col-sm-6 col-md-4">
                        <img  src ={ServiceFour} alt ="services"/>
                        <Link to = '/packages'>Employee Owned</Link>
                        <p>
                            Supercharge your WordPress hosting with detailed website analytics, marketing tools.
                        </p>
                    </div>
                    <div className ="my-features col-12 col-sm-6 col-md-4">
                        <img  src ={ServiceFive} alt ="services"/>
                        <Link to = '/packages'>24/7 Support</Link>
                        <p>
                            Supercharge your WordPress hosting with detailed website analytics, marketing tools.
                        </p>
                    </div>
                    <div className ="my-features col-12 col-sm-6 col-md-4">
                        <img  src ={ServiceSix} alt ="services"/>
                        <Link to = '/packages'>100% Uptime Guaranteed</Link>
                        <p>
                            Supercharge your WordPress hosting with detailed website analytics, marketing tools.
                        </p>
                    </div>

                </div>
            </div>
        )
    }
}

export default IndexFeatures;
