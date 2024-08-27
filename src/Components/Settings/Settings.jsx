import React, { useState } from 'react';
import './Settings.css';
import SideBar from '../SideBar/SideBar';
const Settings = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to update user account details goes here
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Password:", password);
        alert("User details updated successfully!");
    };

    return (
        <div className='user-contaier'>
            <SideBar />
            <div className="account-settings">
                <h2 className='updtUser'>تعديل الحساب الشخصي</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-settings">
                        <label htmlFor="username">الاسم المستخدم</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="أدخل الاسم الجديد"
                            required
                        />
                    </div>
                    <div className="form-settings">
                        <label htmlFor="email">البريد الالكتروني</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="أدخل البريد الالكتروني الجديد"
                            required

                        />
                    </div>
                    <div className="form-settings">
                        <label htmlFor="password">كلمة السر</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="أدخل كلمة السر الجديدة"
                            required

                        />
                    </div>
                    <button className='set' type="submit">تعديل</button>
                </form>
            </div>
        </div>

    );
};

export default Settings;
