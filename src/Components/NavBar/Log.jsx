import React, { useState } from 'react';
import './Log.css'; // Ensure you have the right CSS file for styling
import { useNavigate } from 'react-router-dom'; // For navigation after successful login

export default function Log() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate(); // For redirecting after successful login

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Login form submitted');
        console.log('Email:', email);
        console.log('Password:', password);

        try {
            console.log('Sending data to API...');
            const response = await fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            console.log('Response:', response);

            const result = await response.json();
            console.log('Result:', result);

            if (response.ok) {
                // Save the token to local storage
                localStorage.setItem('token', result.token);
                setSuccess('Login successful');
                console.log('Login successful');
                navigate('/User'); // Redirect to the User page or dashboard on success
            } else {
                setError(result.message || 'Login failed');
                console.log('Login failed:', result.message || 'Login failed');
            }
        } catch (error) {
            setError('An error occurred');
            console.log('Error:', error);
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>تسجيل الدخول</h2>
            <div className="input-group">
                <label htmlFor="email">البريد الالكتروني</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="البريد الالكتروني"
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
                    placeholder="كلمة المرور"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="forgot">
                    <p>لاتملك حساب ؟  <a href="/Register">إنشاء حساب</a></p>
                </div>
            </div>
            <div className="input-group">
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
            </div>
            <button type="submit" className="sign">تسجيل الدخول</button>
        </form>
    );
}










