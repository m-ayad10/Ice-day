import React, { useState } from 'react';
import './Footer.css';

function Footer() {
    const [email, setEmail] = useState('');

    const handleInputChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Email submitted:", email); // For testing, logs the email
    };

    return (
        <div>
            <footer className="footer-ryme">
                <div className="row">
                    <div className="col-lg-3 col-sm-7 col-ryme p-4">
                        <h4><i class="fa-solid fa-graduation-cap"></i>YenLearn</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        <div className="d-flex">
                            <p><i class="fa-brands fa-instagram footer-icon"></i></p>
                            <p><i class="fa-brands fa-x-twitter footer-icon ps-1"></i></p>
                            <p><i class="fa-brands fa-facebook footer-icon ps-1"></i></p>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-5 col-ryme p-4">
                        <h4>Learn</h4>
                        <a href="#" className="footer-link text-white">Courses</a><br />
                        <a href="#" className="footer-link text-white">Live Classes</a><br />
                        <a href="#" className="footer-link text-white">Certifications</a><br />
                        <a href="#" className="footer-link text-white">Resources</a><br />
                    </div>


                    <div className="col-lg-3 col-sm-7 col-ryme p-4">
                        <h4>Sites & Stores</h4>
                        <a href="#" className="footer-link text-white">About us</a><br />
                        <a href="#" className="footer-link text-white">Contact us</a><br />
                        <a href="#" className="footer-link text-white">Store Locator</a><br />
                        <a href="#" className="footer-link text-white">Support</a><br />
                        <a href="#" className="footer-link text-white">Privacy & Policy</a>
                    </div>

                    <div className="col-lg-4 col-sm-5 col-ryme p-4">
                        <h4>Join Our Newsletter</h4>
                        <p>Get the latest updates from our stores</p>

                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-75 p-1 mt-1 footer-email"
                                value={email}
                                onChange={handleInputChange}
                                required
                            /><br />

                            <button
                                type="submit"
                                className="btn btn-primary w-75 mt-2"
                            >
                                Subscribe
                            </button>
                        </form>

                    </div>
                    <div className="ps-4 pe-4">
                        <hr className="w-100 text-white" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <p className="text-secondary mb-3">© Copyright</p>
                    </div>

                    <div className="hieght"></div>

                </div>
            </footer>
        </div>
    );
}

export default Footer;