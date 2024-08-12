import React, { useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
{/* <NavBar /> */ }

export default function Register() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name1, setName1] = useState('')
    const [name2, setName2] = useState('')

    return (
        <form class="form">
            <h2>انشاء حساب</h2>
            <p>انشىء حسابك الأن لدى الجمعية</p>
            <div className='name-holder'>
                <div class="input-group">
                    <label for="username">الاسم الأول</label>
                    <input type="text" name="username" id="username" placeholder="" onChange={(e) => setName1(e.target.value)} />
                </div>
                <div class="input-group">
                    <label for="username">الاسم الثاني</label>
                    <input type="text" name="username" id="username" placeholder="" onChange={(e) => setName2(e.target.value)} />
                </div>
            </div>
            <div class="input-group">
                <label for="username">البريد الالكتروني</label>
                <input type="email" name="username" id="username" placeholder="" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div class="input-group">
                <label for="password">كلمة المرور</label>
                <input type="password" name="password" id="password" placeholder="" onChange={(e) => setPassword(e.target.value)} />
                <div class="forgot">
                        {/* <p>تملك حساب ؟  <a href="/login">  تسجيل الدخول الى الحساب</a></p> */}
                </div>
            </div>
            <button> <a href="/login" class="sign">   أنشاء حساب  </a></button>
        </form>
    )
}

