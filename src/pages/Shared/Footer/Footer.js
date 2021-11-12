import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <>
            <div className="bgColor px-5 py-4">
                <div className="row g-5 mx-auto container">
                    <div className="text-left col-md-4">
                        <h3>Amigos Holiday Charm</h3>
                        <p>This is our tour planner website<br /> We have multi-disciplinary tertiary-care<br /> We provide best service to the clients<br /> of the top facilated travel site</p>
                    </div>
                    <div className="block icon-list text-left col-md-4">
                        <h3>Contact Us</h3>
                        <ul>
                            <li><i className="fab fa-facebook-square icon"></i>&nbsp;Facebook</li>
                            <li><i className="fab fa-twitter icon"></i>&nbsp;Twitter</li>
                            <li><i className="fas fa-share-square icon"></i>&nbsp;Share Square</li>
                            <li><i className="fab fa-google-plus-g icon"></i>&nbsp;Google Plus</li>
                        </ul>

                    </div>
                    <div className="list-style text-left col-md-4 ">
                        <h3>Legal</h3>
                        <h6>Privacy Policy</h6>
                        <h6>Terms And Conditions</h6>
                    </div>
                </div>
            </div>
            <div className="mx-auto bg-clr py-3">
                <p><i className="far fa-copyright"></i>&nbsp;2021 Amigos holiday charm, LLC. All rights reserved.</p>
            </div>
        </>
    );
};

export default Footer;