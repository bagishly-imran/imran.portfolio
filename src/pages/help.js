import React, { Component } from 'react'
import Faq from '../components/Faq';
import '../Sass/Help.scss';

class help extends Component {
    render() {
        return (
            <div className ="help">
                <div className = "help-center d-flex justify-content-center align-items-center">
                    <h1>Help center</h1>
                </div>

                <Faq/>
                
            </div>
        )
    }
}

export default help;
