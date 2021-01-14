import React, { Component } from 'react'
import '../Sass/Help.scss';
import {Link} from 'react-router-dom';

class Faq extends Component {
    render() {
        return (
            <div className = "faq opacity-animation">

                <div className = "section-title">
                    <h2>Frequently ask questions</h2>
                    <p>
                        Supercharge your WordPress hosting with detailed website analytics, marketing tools. Our experts are 
                        just part of the reason Bluehost is the ideal home for your WordPress website. We're here to help you succeed!
                    </p>
                </div>

                <div className = "container">

                    <div className = "faq-content row m-0">

                        <div className = "my-faq">
                            <h4>Why can't people connect to the web server on my PC?</h4>
                            <p>
                                We operate one of the most advanced 100 Gbit networks in the world, 
                                complete with Anycast support and extensive DDoS protection.
                            </p>
                        </div>
                        <div className = "my-faq">
                            <h4>What domain name should I choose for my site?</h4>
                            <p>
                                We operate one of the most advanced 100 Gbit networks in the world, 
                                complete with Anycast support and extensive DDoS protection.
                            </p>
                        </div>
                        <div className = "my-faq">
                            <h4>How can I make my website work without www. in front?</h4>
                            <p>
                                We operate one of the most advanced 100 Gbit networks in the world, 
                                complete with Anycast support and extensive DDoS protection.
                            </p>
                        </div>
                        <div className = "my-faq">
                            <h4>Why does Internet Information Server want a password?</h4>
                            <p>
                                We operate one of the most advanced 100 Gbit networks in the world, 
                                complete with Anycast support and extensive DDoS protection.
                            </p>
                        </div>

                        <div className = "w-100 d-flex justify-content-center m-2">
                            <Link to = '/contact' className = "go-to-btn">Go To Support</Link>
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}

export default Faq;
