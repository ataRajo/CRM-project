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
                حول الجمعية
            </NavLink>


            <NavLink
                to="/LogIn"
                className={({ isActive }) =>
                    isActive ? "active" : ""
                }
            >
                تسجيل الدخول
            </NavLink>


            <NavLink
                to="/Register"
                className={({ isActive }) =>
                    isActive ? "active" : ""
                }
            >
                انشاء حساب
            </NavLink>
            <NavLink
                to='https://www.facebook.com/alhidayacharity/'
                className={({ isActive }) =>
                    isActive ? "active" : ""
                }
            >
                تواصل معنا
            </NavLink>

        </nav>
    )
}

export default NavBar
