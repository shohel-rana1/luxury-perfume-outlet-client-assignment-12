import { Button, Alert, Spinner } from 'react-bootstrap';
import React, { useState } from 'react';
import './Register.css'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const { user, registerUser, isLoading, authError, signInWithGoogle } = useAuth() || {};

    const location = useLocation();
    const history = useHistory();

    const handleonChange = e => {
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
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }
    return (
        <div className="backgrnd-img">
            <div className="container py-5 my-5">
                <h2 className="text-muted pb-2">Register Here</h2>
                {!isLoading && <form onSubmit={handleLoginSubmit}>
                    <input
                        placeholder="Your Name"
                        name="name"
                        onChange={handleonChange}
                    />
                    <br />
                    <br />
                    <input


                        placeholder="Your Email"
                        name="email"
                        type="email"
                        onChange={handleonChange}
                    />
                    <br />
                    <br />
                    <input

                        label="Your Password"
                        placeholder="Your Password"
                        type="password"
                        name="password"
                        onChange={handleonChange}
                    />
                    <br />
                    <br />
                    <input

                        label="ReType Your Password"
                        placeholder="Retype Your Password"
                        type="password"
                        name="password2"
                        onChange={handleonChange}
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
                </form>}
                {isLoading && <Spinner animation="border" variant="success" />}
                {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
                <p>...........OR..........</p>
                <Button onClick={handleGoogleSignIn} variant="success">Google SignIn</Button>
            </div>
        </div>
    );
};

export default Register;