import React, { useState } from 'react';
import axios from 'axios';
import './RegisterForm.css';
import { Link } from 'react-router-dom';
import RegistrationSuccess from './RegistrationSuccess';


const RegisterForm = () => {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [idType, setIdType] = useState('');
    const [idDocument, setIdDocument] = useState('');
    const [addressOne, setAddressOne] = useState('');
    const [addressTwo, setAddressTwo] = useState('');
    const [city, setCity] = useState('');
    const [gender, setGender] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [emergencyPerson, setEmergencyPerson] = useState('');
    const [emergencyPersonContact, setEmergencyPersonContact] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const genders = ['Male', 'Female'];
    const maritalStatuses = ['Married', 'Single', 'Separated'];
    const idTypes = ['Passport', 'National ID'];

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
        setRepeatedPassword('');
        setIdDocument('');
        setPhoneNumber('');
        setIdNumber('');
        setIdType('');
        setAddressOne('');
        setAddressTwo('');
        setCity('');
        setDateOfBirth('');
        setMaritalStatus('');
        setGender('');
        setIdDocument('');
        setEmergencyPerson('');
        setEmergencyPersonContact('');
    };


    return (
        <div className='wrapper'>
            {error && <p>{error}</p>}
            {isRegistered ? (
                <RegistrationSuccess message={successMessage} response={response} />
            ) :
                (<form onSubmit={handleSubmit}>
                    <h3>Welcome to Imperial Technologies</h3>
                    <div className="side-by-side-input-container">
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
                    </div>
                    <div className="side-by-side-input-container">
                        <div className="input-box">
                            <select
                                id="gender"
                                className="form-control custom-select"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                required
                            >
                                <option value="">Select Gender</option>
                                {genders.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="input-box">
                            <select
                                id="maritalStatus"
                                className="form-control custom-select"
                                value={maritalStatus}
                                onChange={(e) => setMaritalStatus(e.target.value)}
                                required
                            >
                                <option value="">Marital Status</option>
                                {maritalStatuses.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="input-box">
                            <input
                                type="date"
                                className="form-control"
                                placeholder="Date of Birth"
                                value={dateOfBirth}
                                onChange={(e) => setDateOfBirth(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="side-by-side-input-container">
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
                    </div>
                    <div className="side-by-side-input-container">
                        <div className="input-box">
                            <select
                                id="idType"
                                className="form-control custom-select"
                                value={idType}
                                onChange={(e) => setIdType(e.target.value)}
                                required
                            >
                                <option value="">ID Type</option>
                                {idTypes.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="input-box">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter ID number"
                                value={idNumber}
                                onChange={(e) => setIdNumber(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-box">
                            <input
                                type="file"
                                className="form-control"
                                placeholder="Upload ID document"
                                value={idDocument}
                                onChange={(e) => setIdDocument(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="side-by-side-input-container">
                        <div className="input-box">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Address One"
                                value={addressOne}
                                onChange={(e) => setAddressOne(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-box">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Address Two"
                                value={addressTwo}
                                onChange={(e) => setAddressTwo(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-box">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="City"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="side-by-side-input-container">
                        <div className="input-box">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Emergency Person"
                                value={emergencyPerson}
                                onChange={(e) => setEmergencyPerson(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-box">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Emergency Person Contact"
                                value={emergencyPersonContact}
                                onChange={(e) => setEmergencyPersonContact(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="side-by-side-input-container">
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
                        <div className="input-box">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repeat password"
                                required
                                value={repeatedPassword}
                                onChange={(e) => setRepeatedPassword(e.target.value)}
                            />
                        </div>
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
                        <p>Not new ?<Link to="/login">Log in</Link></p>
                    </div>
                </form>
                )}
        </div>
    );
};

export default RegisterForm;