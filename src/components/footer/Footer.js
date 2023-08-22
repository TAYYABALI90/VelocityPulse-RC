import React from 'react';

import './footer.css';

const Footer = () => {

    return (

        <div className='footer'>

            <div className='footer-content-details row'>

                <div className='details-1 col-3'>
                    <h6>WELCOME TO</h6>
                    <h2>VELOCITYPULSE RC</h2>
                    <p>Qui cupidatat voluptate labore sunt amet Qui cupidatat voluptate labore sunt amet.</p>
                    <small>Start customizing your ecommerce website.</small>
                    <div className='social-icons'>
                        <i className="bi bi-facebook social-icon-1" />
                        <i className="bi bi-instagram social-icon-2" />
                        <i className="bi bi-twitter social-icon-3" />
                        <i className="bi bi-linkedin social-icon-4" />
                    </div>
                </div>

                <div className='details-2 col-2'>
                    <h6>QUICK LINKS</h6>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Features</a></li>
                    <li><a href="/">Blogs</a></li>
                    <li><a href="/">Review</a></li>
                    <li><a href="/">Faq</a></li>
                    <li><a href="/">Contact</a></li>
                </div>

                <div className='details-3 col-2'>
                    <h6>MY ACCOUNT</h6>
                    <li><a href="/">MY ACCOUNT</a></li>
                    <li><a href="/">ADDRESSES</a></li>
                    <li><a href="/">ORDERS</a></li>
                    <li><a href="/">WISHLIST</a></li>
                    <li><a href="/">TRACK ORDER</a></li>
                </div>

                <div className='details-4 col-3'>
                    <h6>SUBSCRIBE FOR OFFERS & UPDATES</h6>
                    <p>Enter your email and we'll send you a coupon with 10% off your next order. Add any text here</p>
                    <div className='subscribe-newsletter'>
                        <input type="email" placeholder='Enter your email' />
                        <button type='button'>Submit</button>
                    </div>
                </div>

            </div>

            <div className='copyright'>
                Copyright © 2023 Ecommerce Store. All Rights Reserved
            </div>

        </div>

    )

}

export default Footer;