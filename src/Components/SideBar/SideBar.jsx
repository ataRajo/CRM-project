import React from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'
import photo from '../NavBar/photo/charity.jpg'
import { BsPersonFill, BsFileBarGraphFill, BsFillHouseDoorFill, BsFillSendFill, BsPlusCircleFill } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';




const SideBar = () => {
  return (
    <div className='SideBar'>
      <div className='heading'>
        <img src={photo} />
      </div>
      <div className='bodying'>
        <Link to='/user'>
          <BsPersonFill />
          <p>الحساب الشخصي</p>
        </Link>

        <Link to='/user/Track'>
          <BsFileBarGraphFill />
          <p>تتبع الطلب</p>
        </Link>

        <Link to='/user/Campgain'>
          <BsFillHouseDoorFill />
          <p>الحملات</p>

        </Link>

        <Link to='/user/Messages'>
          <BsFillSendFill />
          <p>إرسال رسالة</p>

        </Link>

        <Link to='/user/TrackDonor' >
          <BsFileBarGraphFill />
          <p>تصنيف المتبرعين </p>
        </Link>
        <Link to='/user/Record'>
          <BsPlusCircleFill />
          <p>طلب تبرع</p>

        </Link>

        {/*
   <Link to='/user/Pay'>
          <RiMoneyDollarCircleFill />
          <p> وسيلة الدفع </p>
        </Link>
        <Link to='/user/Settings'>
          <IoMdSettings />
          <p>اعدادات الحساب</p>
        </Link>
*/}


        <Link to='/user/Recipcient'>
          <FaPeopleGroup />
          <p>المستفيدين</p>
        </Link>



      </div>
      <div className='footing'>
        <button className='logout'>
          <Link to='/LogIn'>
            تسجيل خروج
          </Link>
        </button>

      </div>
    </div>
  )
}

export default SideBar

{/*
  
  const LogoutButton = () => {
  const navigate = useNavigate();
}

const handleLogout = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/logout', {
      method: 'POST', // Assuming the logout endpoint expects a POST request
      credentials: 'include', // This includes cookies with the request, if any
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers required, like Authorization if needed
      },
    });

    if (response.ok) {
      // Perform any state cleanup if needed
      // Redirect to login page or homepage after successful logout
      navigate('/login');
    } else {
      console.error('Logout failed:', response.statusText);
      // Handle the error, perhaps show a message to the user
    }
  } catch (error) {
    console.error('Error occurred during logout:', error);
    // Handle the error, perhaps show a message to the user
  }
};
  */ }