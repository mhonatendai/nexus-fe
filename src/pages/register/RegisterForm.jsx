import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';
import { Link } from 'react-router-dom';


const RegisterForm = () => {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [middleName, setMiddleName] = useState('');

    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const registerDTO = { firstName, lastName,emailAddress, phoneNumber, middleName, password };

        try {
            await axios.post('http://localhost:8097/nexus-core/api/employee/register', registerDTO);
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
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className="input-box">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Middle name"
                        value={middleName}
                        onChange={(e) => setMiddleName(e.target.value)}
                    />
                </div>
                <div className="input-box">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div className="input-box">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                        required
                    />
                </div>
                <div className="input-box">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
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
                <div className="login-grid">
                    <button className="btn btn-primary">
                        <Link to="/login">Not new? Log in</Link>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;