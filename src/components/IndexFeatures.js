import React, { Component } from 'react'
import '../Sass/Index.scss';
import Service1 from '../images/services1.svg';
import Service2 from '../images/services2.svg';
import Service3 from '../images/services3.svg';
import Service4 from '../images/services4.svg';
import Service5 from '../images/services5.svg';
import Service6 from '../images/services6.svg';
import 'react-dom';
import ReactHtmlParser from 'react-html-parser';

    

class IndexFeatures extends Component {    

    render() {

        let myFeatures = [
            {
                title : "Employee Owned",
                img : Service1
            },
            {
                title : "Commitment To Security",
                img : Service2
            },
            {
                title : "Passion For Privacy",
                img : Service3
            },
            {
                title : "Employee Owned",
                img : Service4
            },
            {
                title : "24/7 Support",
                img : Service5
            },
            {
                title : "100% Uptime Guaranteed",
                img : Service6
            },
        ];

        let myFeature = ""; let i;
    
        for(i=0; i < myFeatures.length; i++) {
            myFeature += 
            '<div class ="my-features col-12 col-sm-6 col-md-4">' +
            '<img  src =' + myFeatures[i].img + ' alt ="services"/>' +
                '<a href = "/packages" class = "my-feature-btn" id = "myFeatures">' + myFeatures[i].title + '</a>' +  
                '<p>Supercharge your WordPress hosting with detailed website analytics, marketing tools. </p>' +
            "</div>";
            
        }

        return (
            <div className = "features-caption container">

                <h2 className = "features-about">Most amazing features</h2>

                <div className = "features-content  nav justify-content-around" id = "myFeatures">

                    {ReactHtmlParser(myFeature)}

                </div>
            </div>
        )
    }
}

export default IndexFeatures;
