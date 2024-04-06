import React, { useState } from 'react';

const index = () => {
  const [formData, setFormData] = useState({
    First_Name: '',
    Last_Name: '',
    email: '',
    password: '',
    confirm_password: '',
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default index;
