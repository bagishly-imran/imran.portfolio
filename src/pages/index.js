import React, { Component } from 'react'
import HeaderTwo from '../components/HeaderTwo';
import Features from '../components/IndexFeatures';
import Packages from '../pages/packages';
import Faq from '../components/Faq';

class index extends Component {
    render() {
        return (
            <div className = "index-content" style = {{backgroundColor: "#4C1E51"}}>
                <HeaderTwo/>    
                <Features/>
                <Packages/>
                <Faq/>
            </div>
        )
    }
}

export default index;