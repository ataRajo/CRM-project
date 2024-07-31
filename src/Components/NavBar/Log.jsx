import React from 'react'
import './Log.css'
import { Link } from 'react-router-dom'
export default function Log({ title, labelU, labelp, descF, info, Lin }) {



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
                    <input placeholder='PassWord' required />

                </div>


                <div className="information">

                    <Link className='first' href='#' >{descF}</Link>

                    <form>
                        {/* Your login form fields go here */}
                        <button type="submit">{Lin}</button>
                    </form>
                    <p> <Link to="/Register">{info}</Link></p>

                </div>
            </div>
        </form>

    )
}
