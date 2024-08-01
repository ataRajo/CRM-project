import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom';
export default function Register({ reg, explain, first, last, email, password, confirm, sub, already, sign }) {
    return (
        <form className="form">
            <p className="title">{reg} </p>
            <p className="message">{explain} </p>
            <div className="flex">
                <label>
                    <input className="input" type="text" placeholder="" required />
                    <span>{first}</span>
                </label>

                <label>
                    <input className="input" type="text" placeholder="" required />
                    <span>{last}</span>
                </label>
            </div>

            <label>
                <input className="input" type="email" placeholder="" required />
                <span>{email}</span>
            </label>

            <label>
                <input className="input" type="password" placeholder="" required />
                <span>{password}</span>
            </label>


            <label>

                <input className="input" type="password" placeholder="" required />
                <span>{confirm}</span>
            </label>

            <form>
                {/* Your signup form fields go here */}
                <Link to='/User'> <button className='btn' type="submit">{sub}</button> </Link>
            </form>
            <p>{already} <Link to="/Login">{sign}</Link></p>

        </form>
    )
}

