import React, { useState } from 'react';
// import './RecordDonations.css';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import SideBar from '../SideBar/SideBar';


const RecordDonations = () => {
  const [donorName, setDonorName] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [donationDate, setDonationDate] = useState('');
  const [donatedTo, setDonatedTo] = useState('')
  const [type, setType] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add the logic to send data to your CRM system
    console.log('Donor Name:', donorName);
    console.log('Amount:', amount);
    console.log('Message:', message);
    setDonorName('');
    setAmount('');
    setMessage('');
    alert('Donation recorded successfully!');

  };

  {/*
    
      const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSave = () => {
    // Handle saving the campaign here
    console.log("Campaign Saved:", { title, description });

    // Clear the input fields after saving
    setTitle('');
    setDescription('');
  };
    
    */}


  return (
    <div className='user-contaier'>
      <SideBar />
      <div className="form-container1">
        <form className="form2">
          <h2>تقديم طلب للتبرع</h2>
          <div className="form-group">
            <label htmlFor="email">اسم المتبرع</label>
            <input required name="name" id="email" type="text" onChange={(e) => setDonorName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">اختيار مستفيد</label>
            <select id="peoples" onChange={(e) => setDonatedTo(e.target.value)}>
              <option value="Ahmad">أحمد</option>
              <option value="ALI">علي</option>
              <option value="Mohamad">محمد</option>
              <option value="Mahmoud">محمود</option>
            </select>
            {/* <input required="" name="email" id="email" type="text"/> */}
          </div>
          <div className="form-group">
            <label htmlFor="email"> المبلغ SYP </label>
            <input required
              name="address" id="email"
              type="number"
              onChange={(e) => setAmount(e.target.value)} />

          </div>
          <div className="form-group">
            {/* <label for="email">المبلغ</label> */}
            {/* <input required="" name="address" id="email" type="text"/> */}
            <select id="typeD" onChange={(e) => setType(e.target.value)}>
              <option value="Money">نقود</option>
              <option value="Surgery">عمليات</option>

            </select>
          </div>
          <div className="form-group">
            <label htmlFor="email">تاريخ التبرع</label>
            <input required name="address" id="email" type="date" onChange={(e) => setDonationDate(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">الرسالة</label>
            <textarea cols="50" rows="10" id="textarea" name="messege" onChange={(e) => setMessage(e.target.value)}>          </textarea>
          </div>
          <button onClick={handleSubmit} type="submit" className="form-submit-btn">إرسال</button>
        </form>
        <div className='pay'>

          <select id="cash">
            <option value="syrCash">سيرياتيل كاش</option>
            <option value="MtnMobile">ام تي ان موبايل</option>
          </select>
        </div>

      </div>
    </div>


  );
};

export default RecordDonations;

