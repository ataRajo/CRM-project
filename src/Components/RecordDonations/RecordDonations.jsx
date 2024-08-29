import React, { useState, useEffect } from 'react';
import './RecordDonations.css';
import SideBar from '../SideBar/SideBar';

const RecordDonations = () => {
  const [donorName, setDonorName] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [donationDate, setDonationDate] = useState('');
  const [donatedTo, setDonatedTo] = useState('');
  const [type, setType] = useState('');
  const [recipients, setRecipients] = useState([]);
  const [donationTypes, setDonationTypes] = useState([]);

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      console.error('User not authenticated');
      return;
    }

    // Fetch recipient options
    const fetchRecipients = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/recipients', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setRecipients(data);
      } catch (error) {
        console.error('Error fetching recipients:', error);
      }
    };

    // Fetch donation types
    const fetchDonationTypes = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/donation_types', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setDonationTypes(data);
      } catch (error) {
        console.error('Error fetching donation types:', error);
      }
    };

    fetchRecipients();
    fetchDonationTypes();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      alert('User not authenticated');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/api/donations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          recipientID: parseInt(donatedTo, 10),
          donationTypeID: parseInt(type, 10),
          DonationDate: donationDate,
          Amount: parseFloat(amount),
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('Donation recorded successfully!');
        setDonorName('');
        setAmount('');
        setMessage('');
        setDonationDate('');
        setDonatedTo('');
        setType('');
        console.log("ok");
      } else {
        setMessage(`Error: ${result.message || 'Something went wrong'}`);
      }
    } catch (error) {
      setMessage('An error occurred');
      console.error('Error:', error);
    }
  };
  //console.log(recipients)

  return (
    <div className='user-contaier'>
      <SideBar />
      <div className="form-container1">
        <form className="form2" onSubmit={handleSubmit}>
          <h2>تقديم طلب للتبرع</h2>
          <div className="form-group">
            <label htmlFor="donorName">اسم المتبرع</label>
            <input
              required
              name="donorName"
              id="donorName"
              type="text"
              value={donorName}
              onChange={(e) => setDonorName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="donatedTo">اختيار مستفيد</label>
            <select
              id="donatedTo"
              value={donatedTo}
              onChange={(e) => setDonatedTo(e.target.value)}
            >
              <option value="">اختار المستفيد</option>
              {recipients.map(recipient => (
                <option key={recipient.RecipientID} value={recipient.RecipientID}>
                  {recipient.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="amount">المبلغ</label>
            <input
              required
              name="amount"
              id="amount"
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">نوع التبرع</label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">اختار نوع التبرع</option>
              {donationTypes.map(donationType => (
                <option key={donationType.DonationTypeID} value={donationType.DonationTypeID}>
                  {donationType.TypeName}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="donationDate">تاريخ التبرع</label>
            <input
              required
              name="donationDate"
              id="donationDate"
              type="date"
              value={donationDate}
              onChange={(e) => setDonationDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">الرسالة</label>
            <textarea
              required
              cols="50"
              rows="10"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="form-submit-btn">إرسال</button>
          {message && <p className="message">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default RecordDonations;
