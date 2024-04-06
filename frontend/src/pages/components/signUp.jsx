import React, { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    Name: '',
    lName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = e => {
    const { fname, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [fname]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form data:', formData);
    // perform validation or send data to server 
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">First Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.fName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="name">Last Name:</label>
          <input
            type="text"
            id="lname"
            name="name"
            value={formData.lName}
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupForm;
