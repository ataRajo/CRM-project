import React from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'
import photo from '../NavBar/photo/charity.jpg'
import { BsPersonFill, BsFileBarGraphFill, BsFillHouseDoorFill, BsFillSendFill, BsPlusCircleFill } from "react-icons/bs";


const SideBar = () => {
  return (
    <div className='SideBar'>
        <div className='heading'>
            <img src={photo}/>
        </div>
        <div className='bodying'>
            <Link to='/user'>
            <BsPersonFill/>
            <p>الحساب الشخصي</p>
            </Link>
            <Link to='/user/Track'>
            <BsFileBarGraphFill/>
            <p>المتابعة</p>
            </Link>
            <Link to='/user/Campgain'>
            <BsFillHouseDoorFill/>  
            <p>الحملات</p>
            </Link>
            <Link to='/user/Messages'>
            <BsFillSendFill/>
            <p>إرسال رسالة</p>
            </Link>
            <Link to='/user/Record'>
            <BsPlusCircleFill/>
            <p>طلب تبرع</p>
            </Link>
            {/* <Link to='./Logout'>Logout</Link> */}
        </div>
        <div className='footing'>
            <Link to='/LogIn'>تسجيل خروج</Link>
        </div>
    </div>
  )
}

export default SideBar