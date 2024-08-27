import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import './Campagin.css';

const Campagin = () => {
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

  return (
    <div className='container'>
      <div className='sideBar_holder'>
        <SideBar />
      </div>
      <div>
        <div className='name-holder'>
          <h1>الحملات</h1>
        </div>

        <div className='camp-holder'>
          <div className='camp-input'>
            <input
              onChange={handleTitleChange}
              type='text'
              value={title} // Controlled input
              placeholder='اسم الحملة'
              className='camp-inputs'
            />
            <input
              onChange={handleDescriptionChange}
              type='text'
              value={description} // Controlled input
              placeholder='وصف الحملة'
              className='camp-inputs'
            />
            <button onClick={handleSave} className='camp-button'>حفظ</button>
          </div>
          <div className='camp-view'>
            <table className="table">
              <thead>
                <tr>
                  <th className="py-2 border">اسم الحملة</th>
                  <th className="py-2 border">وصف الحملة</th>
                  <th className="py-2 border"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>علي</td>
                  <td>دفع</td>
                  <td>
                    <button type="submit" className="btn btn-primary mt-2">حذف</button>
                  </td>
                </tr>

                <tr>
                  <td>علي</td>
                  <td>دفع</td>
                  <td>
                    <button type="submit" className="btn btn-primary mt-2">حذف</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campagin;
