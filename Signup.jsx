import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import './Sign.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};
    if (!formData.firstName) {
      newErrors.firstName = 'please enter the First name ';
    }
    if (!formData.lastName) {
      newErrors.lastName = 'Please enter the Last name';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.password) {
      newErrors.password = 'please enter the Password';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
     
      console.log(formData);
      alert("succesfully signed up");
      
    }
  };

  return (
    <div className='theentire'>
      <div className='Thefirst1'>
        <form onSubmit={handleSubmit}>
          <h1 style={{ color: 'lightblue' }}>SIGNUP</h1>
          FirstName
          <TextField
            name="firstName"
            label="First Name"
            value={formData.firstName}
            onChange={handleChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
            fullWidth
            margin="normal"
          />
          LastName
          <TextField
            name="lastName"
            label="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
            fullWidth
            margin="normal"
          />
          Email
          <TextField
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            type="text"
            fullWidth
            margin="normal"
          />
          Password
          <TextField
            name="password"
            label="Password"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            type="password"
            fullWidth
            margin="normal"
          />
          <Link to="/login">Already have an account!!!</Link><br></br><br></br>
          <Button variant="contained" type="submit">Signup</Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
