import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const registerDTO = { email, password };

        try {
            await axios.post('/register', registerDTO); 
            //redirect to login
        } catch (err) {
            setError('Registration failed. Please try again.');
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Register</button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default RegisterForm;