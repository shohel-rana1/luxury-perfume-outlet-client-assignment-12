import { Button, Alert, Spinner } from 'react-bootstrap';
import React, { useState } from 'react';
import './Register.css'
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const { user, registerUser, isLoading, authError } = useAuth() || {};

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
        <div className="backgrnd-img">
            <div className="container py-5 my-5">
                <h2 className="text-muted pb-2">Register Here</h2>
                <form onSubmit={handleLoginSubmit}>
                    <input
                        placeholder="Your Name"
                        name="name"
                        onChange={handleOnChange}
                    />
                    <br />
                    <br />
                    <input


                        placeholder="Your Email"
                        name="email"
                        type="email"
                        onChange={handleOnChange}
                    />
                    <br />
                    <br />
                    <input

                        label="Your Password"
                        placeholder="Your Password"
                        type="password"
                        name="password"
                        onChange={handleOnChange}
                    />
                    <br />
                    <br />
                    <input

                        label="ReType Your Password"
                        placeholder="Retype Your Password"
                        type="password"
                        name="password2"
                        onChange={handleOnChange}
                    />
                    <br />
                    <br />
                    <Button sx={{ width: '75%', m: 1 }} type="submit" variant="success">Register</Button>
                    <br />
                    <br />
                    <NavLink
                        style={{ textDecoration: 'none' }}
                        to="/login">
                        <Button variant="text">Already Registered? Please Login</Button>
                    </NavLink>
                    <br />
                    <br />
                </form>
                {isLoading && <Spinner animation="border" variant="success" />}
                {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
            </div>
        </div>
    );
};

export default Register;