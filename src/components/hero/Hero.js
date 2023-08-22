import React from 'react';

import './hero.css';

const Hero = () => {
    return (

        <>

            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand mx-5 text-dark fw-bold fs-4" href="#">VELOCITYPULSE RC</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mx-auto mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-dark fs-5 text-uppercase" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark fs-5 text-uppercase" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark fs-5 text-uppercase" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark fs-5 text-uppercase" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark fs-5 text-uppercase" href="#">Blogs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark fs-5 text-uppercase" href="#">Review</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark fs-5 text-uppercase" href="#">Faq</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark fs-5 text-uppercase" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div class="hero-sec">

                <div class="hero-content">
                    <h6>NOW YOU CAN FEEL THE HEAT</h6>
                    <h1>Smart New Future</h1>
                    <small>It is a long established fact that a reader will be distracted by the readable content</small>
                    <button type="button" class="hero-btn shadow-sm mt-3">Get Started</button>
                </div>

            </div>

        </>

    )
}

export default Hero;