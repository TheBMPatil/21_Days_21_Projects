import React from 'react'
import "./UserProfileCard.css"
import profile_icon from "../assets/user.jpg"
const UserProfileCard = () => {
    return (
        <div className="main">
            
        <div className='ups'>
            <div className="gradiant"></div>
            <div className="profile-down">
                <img src={profile_icon} alt="" />
                <div className="profile-title">Bhagvat Mutthe</div>
                <div className="profile-description">
                I’m Bhagvat, a passionate developer diving into full-stack web development. I enjoy building projects like CareerQuest and challenging myself with initiatives like "21 Days, 21 React Projects." Constantly learning, I’m working on improving my decision-making skills and English communication while exploring new ways to grow as a developer.
                </div>
                <div className="profile-button">
                    <a href="mailto:bmpatil.dev@gmail.com">Contact Me</a>
                </div>
            </div>
        </div>

        </div>
    )
}

export default UserProfileCard