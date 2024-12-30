import React  from "react";
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const LoginForm = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Sign in</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required/>
                    <FaUser className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required/>
                    <FaLock className="icon"/>
                </div>
                <button type="submit">Login</button>
                <div className="register-link">
                    <p>New employee? <a href="#">Register</a></p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm