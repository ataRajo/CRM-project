import React from 'react'
import './Log.css'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

export default function Log({ title, labelU, labelp, descF, info, Lin }) {

    <NavBar />


    return (
        <form className='Containerl'>
            <h2 className='titlel'>{title}</h2>

            <div className='at-Login'>

                <div className='userName'>

                    <label className='userl'>{labelU}</label>
                    <input placeholder='Email' required />

                </div>

                <div className='Password'>

                    <label className='passl'>{labelp}</label>
                    <input placeholder='Password' type='password' required />

                </div>


                <div className="information">

                    <Link className='first' href='#' >{descF}</Link>

                    <form>
                        {/* Your login form fields go here */}

                        <Link to='/User'> <button type="submit">{Lin}</button> </Link>
                    </form>
                    <p> <Link to="/Register">{info}</Link></p>

                </div>
            </div>
        </form>

    )
}
