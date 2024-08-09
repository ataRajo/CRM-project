// src/MailingCard.js
import React, { useState } from 'react';
import './Messages.css';

const Messages = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to server or update CRM
        console.log('Form Data Submitted:', formData); //ques
        alert('the Mail Submitted')
    };

    return (
        <div className="card">
            <h2>Mailing Information</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className='send' type="submit">Send</button>
            </form>
        </div>
    );
};

export default Messages;

{/*
    useState initializes the state formData with an object containing empty strings for name, email, and address.
    setFormData is a function to update this state.
    
   
    


1-
The function takes an event object e as its parameter. 
This event object is automatically provided by the browser whenever 
an event (like an input change) occurs.

2-
e.target : refers to the element that triggered the event. In this case, it's the (input) or (textarea)
const { name, value } uses destructuring assignment to extract the name and value properties from (e.target).<<<<<استخراج قيمة والاسم
name is the name attribute of the input element.
value is the current value of the input element.




3-
setFormData is a function provided by the useState hook to update the state formData.

{ ...formData } creates a shallow copy of the current state. This ensures we don't mutate the existing state directly.
[name]: value is a computed property name. It uses the value of the name variable as the key in the new object
 and sets its value to the value variable.
The result is a new object where the property corresponding to the input's name is updated with the new value.

    */ }