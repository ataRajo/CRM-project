import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom'; // For navigation after successful registration

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate(); // For redirecting after successful registration

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== passwordConfirmation) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },

                body: JSON.stringify({
                    username,
                    email,
                    password,
                    password_confirmation: passwordConfirmation,
                }),
            });

            const result = await response.json();

            if (response.ok) {
                setSuccess('Registration successful');
                navigate('/login');
            } else {
                setError(result.message || 'Registration failed');
            }
        } catch (error) {
            console.log(error)
            setError('An error occurred');
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>انشاء حساب</h2>
            <p>انشىء حسابك الأن لدى الجمعية</p>
            <div className='name-holder'>
                <div className="input-group">
                    <label htmlFor="username">الاسم الأول</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder=""
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="username2">الاسم الثاني</label>
                    <input
                        type="text"
                        name="username2"
                        id="username2"
                        placeholder=""
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
            </div>
            <div className="input-group">
                <label htmlFor="email">البريد الالكتروني</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label htmlFor="password">كلمة المرور</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label htmlFor="password_confirmation">تأكيد كلمة المرور</label>
                <input
                    type="password"
                    name="password_confirmation"
                    id="password_confirmation"
                    placeholder=""
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
            </div>
            <div className="input-group">
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
            </div>
            <button type="submit" className="sign">أنشاء حساب</button>
        </form>
    );
}








