// src/Campaign.js
import React from 'react';
import './Campgain.css';
import SideBar from '../SideBar/SideBar';
const handleSubmit = () => {
    alert('تم الانتساب')
}
const Campaign = () => {
    return (

        <div className='user-contaier'>
            <SideBar />
            <div className="card-container">
                <div className="card">
                    <div className="content">
                        <h2 className="title1">حملة الجمعية </h2>
                        <div className="title2"> أخر حملة ل جمعيتنا كانت تهدف الى<br /> تحسين العلاقة بين المتبرع والمستفيد <br /> عن طريق تتبع التبرعات</div>
                        <div className="description">
                            <h2>تفاصيل الحملة</h2>
                            <ul>
                                <li>الفئة المستهدفة: المحتاجين ذو وضع صغب</li>
                                <li>المدة:أشهر 3 </li>
                                <li>الهدف من الحملة :ضمان المتبرع ل جمعيتنا ومساعدة الناس بشكل خاص</li>
                            </ul>
                        </div>
                        <button onClick={handleSubmit} className='card-submit'>
                            انتساب الى الحملة
                        </button>
                    </div>
                </div>
            </div>
        </div>

        // <div className="campaign-container">
        //     <h1 className="campaign-title">حملة الجمعية </h1>
        //     <p className="campaign-description">
        //         أخر حملة ل جمعيتنا كانت تهدف الى<br /> تحسين العلاقة بين المتبرع والمستفيد <br /> عن طريق تتبع التبرعات
        //     </p>
        //     <div className="campaign-details">
        //         <h2>تفاصيل الحملة</h2>
        //         <ul>
        //             <li>الفئة المستهدفة: المحتاجين ذو وضع صغب</li>
        //             <li>المدة:أشهر 3 </li>
        //             <li>الهدف من الحملة :ضمان المتبرع ل جمعيتنا ومساعدة الناس بشكل خاص</li>
        //         </ul>
        //         <button type='submit' className='share' onClick={handleSubmit} >انتساب الى الحملة</button>
        //     </div>
        // </div>
    );
};

export default Campaign;