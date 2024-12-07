import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;
    const slideForward = () => {
        if (tx > -75) { // Adjusted to ensure the full slide navigation
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };
    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    return (
        <div className='testimonials'>
            <img src={back_icon} alt="Back" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="User 1" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Lorem, ipsum dolor</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem harum eligendi vero quae est porro blanditiis eum aperiam asperiores pariatur.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="User 2" />
                                <div>
                                    <h3>Sarah Johnson</h3>
                                    <span>Lorem, ipsum dolor</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem harum eligendi vero quae est porro blanditiis eum aperiam asperiores pariatur.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="User 3" />
                                <div>
                                    <h3>Emma Brown</h3>
                                    <span>Lorem, ipsum dolor</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem harum eligendi vero quae est porro blanditiis eum aperiam asperiores pariatur.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="User 4" />
                                <div>
                                    <h3>John Doe</h3>
                                    <span>Lorem, ipsum dolor</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem harum eligendi vero quae est porro blanditiis eum aperiam asperiores pariatur.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <img src={next_icon} alt="Next" className='next-btn' onClick={slideForward} />
        </div>
    );
};

export default Testimonials;
