import React, { useState } from 'react';
import axios from 'axios';
import './RegisterForm.css';
import { Link } from 'react-router-dom';
import RegistrationSuccess from './RegistrationSuccess';


const RegisterForm = () => {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const registerDTO = { firstName, lastName, emailAddress, phoneNumber, middleName, password };
        try {
            const responseData = await axios.post('http://localhost:8097/nexus-core/api/employee/register', registerDTO);
            setSuccessMessage('Registration successful! Welcome!');
            setIsRegistered(true);
            setResponse(responseData);
        } catch (err) {
            setError('Registration failed. Please try again.');
            console.error(err);
        }
    };

    const handleClear = () => {
        //To be optimized to use a setFormData sort of implementation.
        setFirstName('');
        setLastName('');
        setEmailAddress('');
        setIsRegistered(false);
        setMiddleName('');
        setPassword('');
        setPassword('');
        setPhoneNumber('');
    };


    return (
        <div className='wrapper'>
            {error && <p>{error}</p>}
            {isRegistered ? (
                <RegistrationSuccess message={successMessage} response={response} />
            ) :
                (<form onSubmit={handleSubmit}>
                    <h3>Welcome to Imperial Technologies</h3>
                    <div className="side-by-side-container">
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
                    <div className="side-by-side-container">
                        <button type="submit" className="btn btn-primary">
                            Register
                        </button>
                        <button type="button" className="btn btn-secondary" onClick={handleClear}>
                            Clear
                        </button>
                    </div>
                    <div className="login-grid">
                        <button className="btn btn-primary">
                            <p>Not new ?<Link to="/login">Log in</Link></p>
                        </button>
                    </div>
                </form>
                )}
        </div>
    );
};

export default RegisterForm;