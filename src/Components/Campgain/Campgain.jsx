// src/Campaign.js
import React from 'react';
import './Campgain.css';


const Campaign = () => {
    return (
        <div className="campaign-container">
            <h1 className="campaign-title">حملة الجمعية </h1>
            <p className="campaign-description">
                أخر حملة ل جمعيتنا كانت تهدف الى<br /> تحسين العلاقة بين المتبرع والمستفيد <br /> عن طريق تتبع التبرعات
            </p>
            <div className="campaign-details">
                <h2>تفاصيل الحملة</h2>
                <ul>
                    <li>الفئة المستهدفة: المحتاجين ذو وضع صغب</li>
                    <li>المدة:أشهر 3 </li>
                    <li>الهدف من الحملة :ضمان المتبرع ل جمعيتنا ومساعدة الناس بشكل خاص</li>
                </ul>
            </div>
        </div>
    );
};

export default Campaign;