import React, { Component } from 'react'
import 'react-dom';
import '../Sass/LogReg.scss';
import Loader from '../images/loder.webp';
import {Link} from 'react-router-dom';

class login extends Component {

    render() {
        return (
            <div className = "log-reg-content">

                <div className = "container d-flex justify-content-center align-items-center">

                    <form className = "register-form log-reg">

                        <div className = "logo-and-head">
                            <img src = {Loader} className ="log-reg-logo" alt="loader"/>
                            <h4>Login</h4>
                        </div>

                        <div className = "log-reg-group">

                            <label htmlFor = "email">
                                <span>Email Address</span>
                                <input type = "mail" id = "email" name ="email" placeholder ="Email Address... "/>
                            </label>
                            <label htmlFor = "password">
                                <span>Password</span>
                                <input type = "password" id = "password" name ="password" placeholder ="Password... "/>
                            </label>

                            <button>Login</button>
                            <div className = "d-flex justify-content-between">
                                <Link to = '/register'>Registration</Link>
                                <Link to = '/forgot'>Forgot Password</Link>
                            </div>
                        </div>

                    </form>

                </div>

            </div>
        )
    }
}

export default login;