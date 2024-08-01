import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
    return (
        <nav>
            <NavLink
                to="/About"
                className={({ isActive }) =>
                    isActive ? "active" : ""
                }
            >
                About
            </NavLink>


            <NavLink
                to="/LogIn"
                className={({ isActive }) =>
                    isActive ? "active" : ""
                }
            >
                logIn
            </NavLink>


            <NavLink
                to="/Register"
                className={({ isActive }) =>
                    isActive ? "active" : ""
                }
            >
                Register
            </NavLink>
            <NavLink
                to='https://www.facebook.com/alhidayacharity/'
                className={({ isActive }) =>
                    isActive ? "active" : ""
                }
            >
                contact
            </NavLink>

        </nav>
    )
}

export default NavBar
