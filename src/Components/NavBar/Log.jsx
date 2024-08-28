import React, { useState } from 'react'
import './Log.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'

export default function Log() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const handleLogin = async () => {
        // e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/auth/login', {
                "email": email,
                "password": password,
            });
            console.log(response.data.access_token)
            localStorage.setItem('token', response.data.access_token); //يحفظ key -value 
            //يحفظ الاكسيس توكين بقلب لوكال تسوريج  وبيحفظا بل key = token 
            navigate('/user');

        } catch (error) {
            console.error('There was an error!', error.response ? error.response.data : error.message);
        }
    };
    return (
        <form className="form">
            <h2>تسجيل الدخول</h2>
            <div className="input-group">
                <label htmlFor="username">البريد الالكتروني</label>
                <input type="email" name="username" id="username" placeholder="" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-group">
                <label htmlFor="password">كلمة المرور</label>
                <input type="password" name="password" id="password" placeholder="" onChange={(e) => setPassword(e.target.value)} />
                <div className="forgot">
                    <p>لاتملك حساب ؟  <a href="/Register">إنشاء حساب</a></p>
                </div>
            </div>
            <Link to='/user'>
                <button type='submit' className="sign">تسجيل دخول</button>
            </Link>

        </form>
    )
}