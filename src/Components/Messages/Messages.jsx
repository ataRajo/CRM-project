import React, { useState, useEffect } from 'react';
import './Messages.css';
import SideBar from '../SideBar/SideBar';

const Messages = () => {
  const [formData, setFormData] = useState({
    receiver_id: '',
    message: '',
  });

  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users when the component mounts
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token'); // mshan yt2kd mn token
        const response = await fetch('http://127.0.0.1:8000/api/users', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json' //data Type: json bs
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json(); //convert json to js
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers(); //fetch all users to know which one should i sent the Message
  }, []);

  const handleChange = (e) => { //process the form data
    const { name, value } = e.target;
    setFormData({ //update the data
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://127.0.0.1:8000/api/messages', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      await response.json(); // Optionally handle response data
      alert('The message has been submitted');
      setFormData({ receiver_id: '', message: '' });
    } catch (error) {
      console.error('Error submitting the message:', error);
    }
  };

  return (
    <div className='user-contaier'>
      <SideBar />
      <div className="form-container">
        <form className="form1" onSubmit={handleSubmit}>
          <h2>إرسال رسالة</h2>
          <div className="form-group">
            <label htmlFor="receiver_id">المستلم</label>
            <select
              name="receiver_id"
              id="receiver_id"
              value={formData.receiver_id}
              onChange={handleChange}
              required
            >
              <option value="">اختر المستلم</option>
              {users.map((user) => (
                <option key={user.userID} value={user.userID}>
                  {user.username}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">كيف يمكننا مساعدتك؟</label>
            <textarea
              id="message"
              name="message"
              cols="50"
              rows="10"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="form-submit-btn">إرسال</button>
        </form>
      </div>
    </div>
  );
};

export default Messages;