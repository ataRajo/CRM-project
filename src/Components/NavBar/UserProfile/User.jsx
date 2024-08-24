import React, { useState } from 'react';
import './User.css';
import { BsFillTelephoneFill, BsEnvelopeFill, BsBellFill, BsCircleFill } from "react-icons/bs";
import man from '../photo/man.jpg';
import SideBar from '../../SideBar/SideBar';

const User = ({ donor }) => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showStatus, setShowStatus] = useState(false);
    const [unreadCount, setUnreadCount] = useState(3);
    const [isActive, setIsActive] = useState(true);

    const handleMouseEnterNotifications = () => {
        setShowNotifications(true);
    };

    const handleMouseLeaveNotifications = () => {
        setShowNotifications(false);
    };

    const handleMouseEnterStatus = () => {
        setShowStatus(true);
    };

    const handleMouseLeaveStatus = () => {
        setShowStatus(false);
    };

    const markAllAsRead = () => {
        setUnreadCount(0);
    };

    const changeStatus = () => {
        setIsActive(!isActive);
    };

    return (
        <div className='user-contaier'>
            <SideBar />
            <div className="donor-profile">
                <div className="donor-header">
                    <img src={man} alt="Donor Avatar" />
                    <div className="donor-bio">
                        <h2>{donor.name}</h2>
                        <p>{donor.bio}</p>
                    </div>
                    <div className="donor-contact">
                        <p><BsEnvelopeFill size={20} />
                            <span>{donor.email}</span>
                        </p>
                        <p><BsFillTelephoneFill size={20} />
                            <span>{donor.phone}</span></p>
                    </div>
                    <div className="donor-actions">
                        <div
                            className="icon-button"
                            onMouseEnter={handleMouseEnterNotifications}
                            onMouseLeave={handleMouseLeaveNotifications}
                        >
                            <BsBellFill size={20} />
                            {unreadCount > 0 && <span className="badge">{unreadCount}</span>}
                            {showNotifications && (
                                <div className="dropdown-list">
                                    <p>Notification 1</p>
                                    <p>Notification 2</p>
                                    <p>Notification 3</p>
                                    <p onClick={markAllAsRead}>Mark all as read</p>
                                </div>
                            )}
                        </div>
                        <div
                            className="icon-button"
                            onMouseEnter={handleMouseEnterStatus}
                            onMouseLeave={handleMouseLeaveStatus}
                        >
                            <BsCircleFill size={20} style={{ color: isActive ? 'green' : 'red' }} />
                            {showStatus && (
                                <div className="dropdown-list">
                                    <p onClick={changeStatus}>Toggle Status</p>
                                    <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='space'></div>
                <h3 className='donations-header'>التبرعات السابقة</h3>
                <div className="donor-donations">
                    <ul>
                        {donor.donations.map((donation, index) => (
                            <li key={index}>{donation}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default User;

{/*
    
    import React, { useState } from 'react';

function App() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('YOUR_UPLOAD_URL_HERE', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('File uploaded successfully!');
      } else {
        alert('Failed to upload file.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file.');
    }
  };

  return (
    <div className="App">
      <h2>Upload a Photo</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default App;

    
    
    */}

//FormData is used to create a form-like object that holds the file data. This is necessary when sending files in a POST request.
//File Upload:

//handleUpload function is responsible for sending the selected file to the server. The fetch API is used here to make the POST request. The file is appended to FormData and sent to the server.
//Replace 'YOUR_UPLOAD_URL_HERE' with the actual endpoint URL where the file will be uploaded.