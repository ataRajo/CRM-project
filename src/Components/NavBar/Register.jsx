import React, { useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import axios from 'axios';
{/* <NavBar /> */ }

export default function Register() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name1, setName1] = useState('')
    const [name2, setName2] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register', {
                name: name1,
                lastname: name2,
                email: email,
                password: password
            });
            console.log(response.data);

        } catch (error) {
            if (error.response) { //بشوف اذا في غلط بل ريسبونس
                console.error('Error response data:', error.response.data); //تفاصيل عن الايرور وتعاد من السيرفر
                console.error('Error response status:', error.response.status); //بيعرضلي الاخطاء متل 404و500
                console.error('Error response headers:', error.response.headers);
                setErrorMessage(error.response.data.message || 'An error occurred'); // عرض رسالة الخطأ
            } else if (error.request) {
                console.error('Error request data:', error.request); // to see what was sent to the server
                setErrorMessage('No response received from the server');
            } else {
                console.error('Error message:', error.message);

                setErrorMessage(error.message);
            }
        }
    };
    return (
        <form className="form">
            <h2>انشاء حساب</h2>
            <p>انشىء حسابك الأن لدى الجمعية</p>
            <div className='name-holder'>
                <div className="input-group">
                    <label htmlFor="username">الاسم الأول</label>
                    <input type="text" name="username" id="username" placeholder="" onChange={(e) => setName1(e.target.value)} />
                </div>
                <div className="input-group">
                    <label htmlFor="username">الاسم الثاني</label>
                    <input type="text" name="username" id="username" placeholder="" onChange={(e) => setName2(e.target.value)} />
                </div>
            </div>
            <div className="input-group">
                <label htmlFor="username">البريد الالكتروني</label>
                <input type="email" name="username" id="username" placeholder="" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-group">
                <label htmlFor="password">كلمة المرور</label>
                <input type="password" name="password" id="password" placeholder="" onChange={(e) => setPassword(e.target.value)} />
                <div className="forgot">
                    {/* <p>لاتملك حساب ؟  <a href="/Register">إنشاء حساب</a></p> */}
                </div>
            </div>
            <Link to="/login">
                <button type="button" className="sign">تسجيل دخول</button>
            </Link>
        </form>
    )
}

{/*
Inside this block:
console.error('Error response headers:', error.response.headers);: Logs the headers of the response.
Inside this block:
    */}