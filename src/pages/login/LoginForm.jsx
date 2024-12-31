import React  from "react";
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useState } from 'react';
import axios from 'axios';


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {

          const response = await axios.post('http://localhost:8097/employee/login', {
            username: username,
            password: password
          });
    
          console.log(response.data);
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };

    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Sign in</h1>
                <div className="input-box">

                    <input
                     type="text" placeholder='Username' required
                     value={username} onChange={(e) => setUsername(e.target.value)}
                     />
                    <FaUser className="icon"/>

                </div>
                <div className="input-box">
                    
                    <input
                    type="password" placeholder='Password' required
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                    <FaLock className="icon"/>

                </div>
                <button type="submit">Login</button>
                <div className="register-link">
                    <p>Joining? <a href="#">Register</a></p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm