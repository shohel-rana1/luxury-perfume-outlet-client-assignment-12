import './Login.css'
import { Button, Spinner, Alert } from 'react-bootstrap';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth() || {};

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }
    return (
        <>
        <Navigation></Navigation>
            <div className="backgrnd-img">
            <div className="container py-5 g-2">
                <h2 className="text-muted pb-2">Login Please</h2>
                <form onSubmit={handleLoginSubmit}>

                    <input
                        label="Your Email"
                        name="email"
                        autoComplete="on"
                        placeholder="Your Email"
                        onBlur={handleOnBlur}
                    />
                    <br />
                    <br />
                    <input
                        label="Your Password"
                        placeholder="Your Password"
                        type="password"
                        autoComplete="on"
                        name="password"
                        onBlur={handleOnBlur}
                    />
                    <br />
                    <br />

                    <Button sx={{ width: '75%', m: 1 }} type="submit" variant="success">Login</Button>
                    <br />
                    <br />
                    <NavLink
                        style={{ textDecoration: 'none' }}
                        to="/register">
                        <Button variant="text">New User? Please Register</Button>
                    </NavLink>
                    <br />
                    <br />
                    {isLoading && <Spinner animation="border" variant="success" />}
                    {user?.email && <Alert severity="success">Login successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </form>
                <p>...........OR..........</p>
                <Button onClick={handleGoogleSignIn} variant="success">Google SignIn</Button>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Login;