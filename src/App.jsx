// App.js

import './App.css'
import { useState } from 'react'

function App() {
  const [userData, setUserData] = useState({
    name:'',
    designation:'',
    address:'',
    phone: '',
    email:'',
    submit:false,
    error: ''
  });

  const handleSubmit = () => {
    // Check if all fields are filled
    if (userData.name && userData.designation && userData.address && userData.phone && userData.email) {
      setUserData({...userData, submit: true, error: ''});
    } else {
      setUserData({...userData, error: 'Please fill in all fields'});
    }
  };

  return (
    <div className="container">
      {/* Form starts */}
      <div className="form-container">
        {/* Heading */}
        <h2>Enter Your Details</h2>
        <input type="text" placeholder='Enter Name' onChange={(e) => setUserData({...userData, name:e.target.value})}/>
        <input type="text" placeholder='Enter Your Designation' onChange={(e) => setUserData({...userData, designation:e.target.value})}/>
        <input type="text" placeholder='Enter Your Address' onChange={(e) => setUserData({...userData, address:e.target.value})}/>
        <input type="number" placeholder='Enter Your Phone Number' onChange={(e) => setUserData({...userData, phone:e.target.value})}/>
        <input type="email" placeholder='Enter Your Email' onChange={(e) => setUserData({...userData, email:e.target.value})}/>
        <button onClick={handleSubmit}>Submit</button>
        {userData.error && <p className="error">{userData.error}</p>}
      </div>
      {/* Form ends */}

      {/* Business Card Starts */}
      {userData.submit &&
        <div className="businesscard">
          <span><strong>Name:</strong> {userData.name}</span>
          <span><strong>Designation:</strong> {userData.designation}</span>
          <span><strong>Address:</strong> {userData.address}</span>
          <span><strong>Phone:</strong> {userData.phone}</span>
          <span><strong>Email:</strong> {userData.email}</span>
        </div>
      }
      {/* Business card ends */}
    </div>
  )
}

export default App
