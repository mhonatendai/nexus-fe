import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const registerDTO = { email, password };

        try {
            await axios.post('/register', registerDTO);
            //redirect to login)
        } catch (err) {
            setError('Registration failed. Please try again.');
            console.error(err);
        }
    };

    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h3>Welcome to Imperial Technologies</h3>
                <div className="input-box">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                    />
                </div>
                <div className="input-box">
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>
                <div className="input-box">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Register
                    </button>
                    {error && <p>{error}</p>}
                </div>
                <p className="forgot-password text-right">
                    Already registered <a href="/login">sign in?</a>
                </p>
            </form>
        </div>
    );
};

export default RegisterForm;