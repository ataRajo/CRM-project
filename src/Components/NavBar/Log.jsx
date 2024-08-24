import React, { useState } from 'react'
import './Log.css'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

export default function Log() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <form className="form">
            <h2>تسجيل الدخول</h2>
            <div className="input-group">
                <label for="username">البريد الالكتروني</label>
                <input type="email" name="username" id="username" placeholder="" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-group">
                <label for="password">كلمة المرور</label>
                <input type="password" name="password" id="password" placeholder="" onChange={(e) => setPassword(e.target.value)} />
                <div className="forgot">
                    <p>لاتملك حساب ؟  <a href="/Register">إنشاء حساب</a></p>
                </div>
            </div>
            {/* <button class="sign" > تسجيل دخول</button> */}
            <button> <a href="/User" class="sign">تسجيل الدخول </a></button>

        </form>
    )
}
