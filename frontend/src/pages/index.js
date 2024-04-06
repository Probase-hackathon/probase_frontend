import React, { useState } from 'react';
import { useRouter } from 'next/router';


const index = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    First_Name: '',
    Last_Name: '',
    email: '',
    password: '',
    confirm_password: '',
    pin: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

 
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form data:', formData);
    
    const sendData = async () => {
    const response = await fetch(
      '/',
      {
        method:"POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      }
    )
    if(response.ok){
      alert("Signup succesfully")
      router.push('/login')
    }
    if(response.status === 400){
      console.log("Error:", response.status)
    }
  }

  sendData()
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="First_Name">First Name:</label>
          <input
            type="text"
            id="name"
            name="First_Name"
            value={formData.First_Name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="Last_Name">Last Name:</label>
          <input
            type="text"
            id="name"
            name="Last_Name"
            value={formData.Last_Name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
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
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="confirm_password">Confirm Password:</label>
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="pin">Pin:</label>
          <input
            type="password"
            id="pin"
            name="pin"
            value={formData.pin}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default index;
