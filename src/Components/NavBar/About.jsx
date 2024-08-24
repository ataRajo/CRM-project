import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'
import NavBar from './NavBar'
import photo from './photo/charity.jpg'
import { BsFacebook, BsInstagram, BsEnvelopeFill } from "react-icons/bs";
const About = ({ info, details }) => {
    <NavBar />

    return (
        <div className="card">
            <div className="img">
                <img src={photo} />
                <div className="share">
                    <Link>فيس بوك <BsFacebook size={28} /></Link>
                    <Link>إنستاغرام <BsInstagram size={28} /></Link>
                    <Link>بريد الكتروني <BsEnvelopeFill size={28} /></Link>
                </div>
            </div>
            <p>من نحن</p>
            <p className="info">تقع هذه الجمعية في العاصمة دمشق خلف ملعب نادي الوحدة
                وهي جمعية غير ربحية
                تأسست لمساعدة الفقراء على اجراء العمليات الجراحية والتبرعات المادية للناس الذين يحتاجون الى
                أموال
                تأسست الجمعية عام 1930
                ومن اللافت أن جمعيتنا هي من اوائل الجمعيات في دمشق ونم اشهارها في عام 1970
                ومازالت مستمرة في عملها الأساسي مع التوسع الطبي

                في الجانب الصحي والطبي والمادي ....
                كما تقدم تغطية كاملة لأهالي المنطقة
                ان مؤسس هذه الجمعية هو الشيخ محمود ياسين وتولى رئاستها مدة عشرين عاما تقريبا

                مدير الجمعية في وقتنا الحالي هو السيد عادل التكريتي </p>
        </div>
    )
}

export default About
