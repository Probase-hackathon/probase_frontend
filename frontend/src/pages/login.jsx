import React, { useState } from 'react';
import { useRouter } from 'next/router';

const login = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '', 
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
        alert("login succesfully")
        router.push('/dashboard')
      }
      if(response.status === 400){
        alert("There was an error. Please try again.")
        console.log("Error:", response.status)
      }
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default login;
