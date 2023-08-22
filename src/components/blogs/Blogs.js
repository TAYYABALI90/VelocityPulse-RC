import React from 'react';

import carImg1 from './blogs-img-3.jpg';
import carImg2 from './blogs-img-4.webp';

import './blogs.css';

const Blogs = () => {

    return (

        <div className='blogs'>

            <div className='blogs-content row'>

                <div className='blogs-content-left-details col-8'>

                    <img src={carImg1} alt="" />

                    <h1>MAURIS DICTUM FACILISIS CONDIMENTUM</h1>

                    <span className='month-span'>July</span> <span className='day-span'>28,</span> <span className='year-span'>2014</span> <span className='vertical-bar'>|</span> <span className='number-span'>23</span> <span className='comment-span'>COMMENTS</span>

                    <p className='para'>Morbi ultricies porttitor varius. In hac habitasse platea dictumst. Vestibulum convallis blandit augue quis sagittis. Quisque semper velit dui, sit amet cursus arcu interdum sit amet. Maecenas augue dui, suscipit fringilla sed, congue vitae purus. Aenean non aliquam mi.</p>

                    <img src={carImg1} alt="" className='mt-5' />

                    <h1>MAURIS DICTUM FACILISIS CONDIMENTUM</h1>

                    <span className='month-span'>July</span> <span className='day-span'>28,</span> <span className='year-span'>2014</span> <span className='vertical-bar'>|</span> <span className='number-span'>23</span> <span className='comment-span'>COMMENTS</span>

                    <p className='para'>Morbi ultricies porttitor varius. In hac habitasse platea dictumst. Vestibulum convallis blandit augue quis sagittis. Quisque semper velit dui, sit amet cursus arcu interdum sit amet. Maecenas augue dui, suscipit fringilla sed, congue vitae purus. Aenean non aliquam mi.</p>

                    <img src={carImg1} alt="" className='mt-5' />

                    <h1>MAURIS DICTUM FACILISIS CONDIMENTUM</h1>

                    <span className='month-span'>July</span> <span className='day-span'>28,</span> <span className='year-span'>2014</span> <span className='vertical-bar'>|</span> <span className='number-span'>23</span> <span className='comment-span'>COMMENTS</span>

                    <p className='para'>Morbi ultricies porttitor varius. In hac habitasse platea dictumst. Vestibulum convallis blandit augue quis sagittis. Quisque semper velit dui, sit amet cursus arcu interdum sit amet. Maecenas augue dui, suscipit fringilla sed, congue vitae purus. Aenean non aliquam mi.</p>

                </div>

                <div className="blogs-content-right-details col-4">

                    <h4>SEARCH</h4>
                    <div class="input-group">
                        <input type="text" class="search-input form-control" placeholder='Search Here' aria-label="Dollar amount (with dot and two decimal places)" />
                        <span class="input-group-text">
                            <i className="bi bi-search search-icon" />
                        </span>
                    </div>

                    <div className='break-line'></div>

                    <h4 className='mt-5'>RECENT POST</h4>

                    <div className='blog-1'>
                        <img src={carImg2} alt="" className='img-thumbnail' style={{ width: '8rem', opacity: '0.8' }} />
                        <div className="blog-1-text">
                            <h5 className='heading'>LOREM IPSUM DOLOR SIT AMSDF</h5>
                            <span className='number-span'>23</span>
                            <span className='comment-span'>COMMENTS</span> <span className='date-span'>APRIL 11, 2014</span>
                            <p>Morbi ultricies porttitor varius. In hac habit<br />asse platea de...</p>
                        </div>
                    </div>

                    <div className='blog-1'>
                        <img src={carImg2} alt="" className='img-thumbnail' style={{ width: '8rem', opacity: '0.8' }} />
                        <div className="blog-1-text">
                            <h5 className='heading'>LOREM IPSUM DOLOR SIT AMSDF</h5>
                            <span className='number-span'>23</span>
                            <span className='comment-span'>COMMENTS</span> <span className='date-span'>APRIL 11, 2014</span>
                            <p>Morbi ultricies porttitor varius. In hac habit<br />asse platea de...</p>
                        </div>
                    </div>

                    <div className='blog-1'>
                        <img src={carImg2} alt="" className='img-thumbnail' style={{ width: '8rem', opacity: '0.8' }} />
                        <div className="blog-1-text">
                            <h5 className='heading'>LOREM IPSUM DOLOR SIT AMSDF</h5>
                            <span className='number-span'>23</span>
                            <span className='comment-span'>COMMENTS</span> <span className='date-span'>APRIL 11, 2014</span>
                            <p>Morbi ultricies porttitor varius. In hac habit<br />asse platea de...</p>
                        </div>
                    </div>

                    <div className='break-line'></div>

                    <h4 className='mt-5'>LATEST POST</h4>

                    <div className='blog-1'>
                        <img src={carImg2} alt="" className='img-thumbnail' style={{ width: '8rem', opacity: '0.8' }} />
                        <div className="blog-1-text">
                            <h5 className='heading'>LOREM IPSUM DOLOR SIT AMSDF</h5>
                            <span className='number-span'>23</span>
                            <span className='comment-span'>COMMENTS</span> <span className='date-span'>APRIL 11, 2014</span>
                            <p>Morbi ultricies porttitor varius. In hac habit<br />asse platea de...</p>
                        </div>
                    </div>

                    <div className='blog-1'>
                        <img src={carImg2} alt="" className='img-thumbnail' style={{ width: '8rem', opacity: '0.8' }} />
                        <div className="blog-1-text">
                            <h5 className='heading'>LOREM IPSUM DOLOR SIT AMSDF</h5>
                            <span className='number-span'>23</span>
                            <span className='comment-span'>COMMENTS</span> <span className='date-span'>APRIL 11, 2014</span>
                            <p>Morbi ultricies porttitor varius. In hac habit<br />asse platea de...</p>
                        </div>
                    </div>

                    <div className='blog-1'>
                        <img src={carImg2} alt="" className='img-thumbnail' style={{ width: '8rem', opacity: '0.8' }} />
                        <div className="blog-1-text">
                            <h5 className='heading'>LOREM IPSUM DOLOR SIT AMSDF</h5>
                            <span className='number-span'>23</span>
                            <span className='comment-span'>COMMENTS</span> <span className='date-span'>APRIL 11, 2014</span>
                            <p>Morbi ultricies porttitor varius. In hac habit<br />asse platea de...</p>
                        </div>
                    </div>

                    <div className='break-line'></div>

                    <div className='blog-categories'>
                        <h5 className='heading'>BLOG CATEGORIES</h5>
                        <ul>
                            <li><a href="/">Lorem Ipsum</a></li>
                            <li><a href="/">Lorem Ipsum</a></li>
                            <li><a href="/">Lorem Ipsum</a></li>
                            <li><a href="/">Lorem Ipsum</a></li>
                            <li><a href="/">Lorem Ipsum</a></li>
                        </ul>
                    </div>

                    <div className='break-line'></div>

                    <div className='blog-tags'>
                        <h5 className='heading'>BLOG TAGS</h5>
                        <div className='row row-cols-1 row-cols-md-3'>
                            <div className='col tag-1'><span className=''>Lorem</span></div>
                            <div className='col tag-2'><span className=''>Lorem</span></div>
                            <div className='col tag-3'><span className=''>Lorem</span></div>
                            <div className='col tag-4'><span className=''>Lorem</span></div>
                            <div className='col tag-5'><span className=''>Lorem</span></div>
                            <div className='col tag-6'><span className=''>Lorem</span></div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )

}

export default Blogs;