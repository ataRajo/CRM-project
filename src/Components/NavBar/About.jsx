import React from 'react'
import './About.css'
import NavBar from './NavBar'
const About = ({ info, details }) => {
    <NavBar />

    return (
        <div className='about'>
            <h1>{info}</h1>
            <p>{details}</p>
        </div>
    )
}

export default About
