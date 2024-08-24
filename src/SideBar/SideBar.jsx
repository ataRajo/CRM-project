import React from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'
import photo from '../assets/charity.jpg'
import { BsPersonFill, BsFileBarGraphFill, BsFillHouseDoorFill, BsFillSendFill, BsPlusCircleFill } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";


const SideBar = () => {
  return (
    <div className='SideBar'>
      <div className='heading'>
        <img src={photo} />
      </div>
      <div className='bodying'>
        <Link to='/'>
          <BsPersonFill />
          <p>لوحة التحكم</p>
        </Link>
        <Link to='/request'>
          <BsFileBarGraphFill />
          <p>الطلبات</p>
        </Link>
        <Link to='/Track'>
          <BsFillHouseDoorFill />
          <p>
            المتابعة
          </p>
        </Link>
        <Link to='/doner'>
          <BsFillSendFill />
          <p>المتبرعون</p>
        </Link>
        <Link to='/campagin'>
          <BsPlusCircleFill />
          <p>الحملات</p>
        </Link>

        <Link to='/Recipcient'>
          <FaPeopleGroup />
          <p>المستفيدين</p>
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