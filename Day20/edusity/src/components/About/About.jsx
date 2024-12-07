import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({ setPlayState }) => {
    return (
        <div className='about'>

            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' onClick={() => { setPlayState(true) }} />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed praesentium corrupti natus sapiente ullam voluptatum perspiciatis quasi ratione laudantium commodi ab molestias fugit, quisquam aperiam at, animi pariatur excepturi. Consectetur harum, quaerat perferendis totam voluptas saepe inventore quidem commodi necessitatibus reprehenderit praesentium porro delectus fugiat eligendi eaque blanditiis officia impedit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, debitis maxime veritatis quidem id magni accusantium doloremque quos sunt repellendus, laudantium ea, ex perspiciatis velit pariatur. Eius dolorem laboriosam eaque ex at nostrum perferendis enim placeat, illum cum, sapiente adipisci!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis debitis officiis commodi voluptate sunt doloribus perspiciatis esse inventore laudantium veritatis necessitatibus, quas iste? Harum, aliquid?</p>
            </div>



        </div>
    )
}

export default About