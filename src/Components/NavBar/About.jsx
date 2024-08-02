import React from 'react'
import './About.css'
import NavBar from './NavBar'
import photo from './photo/charity.jpg'
const About = ({ info, details }) => {
    <NavBar />

    return (
        <div className='about'>
            {/**/}
            <div className='test'>

                <h1>{info}</h1>
                <p>{details}</p>
            </div>

            <img className='chph' src={photo} alt="React Image" />
        </div>
    )
}

export default About
