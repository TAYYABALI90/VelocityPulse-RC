import React from 'react';

import './faq.css';

const Faq = () => {

    return (

        <div className='faq'>

            <div className='faq-content'>

                <div className='faq-content-header'>
                    <h1>Frequently Asked Questions</h1>
                    <small>Who are in extremely love with eco friendly system</small>
                </div>

                <div className="row">

                    <div className='faq-questions col-8'>

                        <p>Are Your Websites Responsive?</p>

                        <span className='faq-span'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</span>

                        <p>Does it have all the plugins as mentioned?</p>

                        <p>Can I use these themes for my client?</p>

                        <p>Are Your Websites Responsive?</p>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default Faq;