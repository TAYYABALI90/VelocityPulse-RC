import React from 'react';

import carImg1 from './features-img-3.png';
import carImg2 from './features-img-4.png';
import carImg3 from './features-img-5.png';
import carImg4 from './features-img-6.png';

import './features.css';

const Features = () => {

    return (

        <div className='features'>

            <div className='features-content'>

                <div className='features-content-header'>
                    <h1>Some Features that Made us Unique</h1>
                    <small>Who are in extremely love with eco friendly system</small>
                </div>

                <div className="features-content-details row row-cols-1 row-cols-md-4">

                    <div class="features-card card">
                        <img src={carImg1} class="card-img-top" alt="" />
                        <div class="card-body">
                            <h1 class="card-title">Remote Control Car</h1>
                            <p class="card-text">
                                <span className='dollar-span'>$</span>
                                <span className='price-span'>200</span>
                            </p>
                            <button type='button'>Pre Order</button>
                        </div>
                    </div>

                    <div class="features-card card">
                        <img src={carImg2} class="card-img-top" alt="" />
                        <div class="card-body">
                            <h1 class="card-title">Remote Control Car</h1>
                            <p class="card-text">
                                <span className='dollar-span'>$</span>
                                <span className='price-span'>200</span>
                            </p>
                            <button type='button'>Pre Order</button>
                        </div>
                    </div>

                    <div class="features-card card">
                        <img src={carImg3} class="card-img-top" alt="" />
                        <div class="card-body">
                            <h1 class="card-title">Remote Control Car</h1>
                            <p class="card-text">
                                <span className='dollar-span'>$</span>
                                <span className='price-span'>200</span>
                            </p>
                            <button type='button'>Pre Order</button>
                        </div>
                    </div>

                    <div class="features-card card">
                        <img src={carImg4} class="card-img-top" alt="" />
                        <div class="card-body">
                            <h1 class="card-title">Remote Control Car</h1>
                            <p class="card-text">
                                <span className='dollar-span'>$</span>
                                <span className='price-span'>200</span>
                            </p>
                            <button type='button'>Pre Order</button>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )

}

export default Features;