import React from 'react'
import './About.css'
const About = ({ info, details }) => {
    return (
        <div className='about'>
            <h1>{info}</h1>
            <p>{details}</p>
        </div>
    )
}

export default About
