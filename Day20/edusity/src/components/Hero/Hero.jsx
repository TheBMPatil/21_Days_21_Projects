import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>We Ensure better education for a better world</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, libero. Quasi dolor, officia magni accusantium dolore eligendi enim, sunt iste tempore repellat officiis, necessitatibus voluptatum vero sequi pariatur dignissimos hic.</p>
                <button className='btn'>Explore More <img src={dark_arrow} alt="" /> </button>
            </div>

        </div>
    )
}

export default Hero