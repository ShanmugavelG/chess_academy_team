import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import './Login.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};
    if (!formData.username) {
      newErrors.username = 'Please enter the Username';
    }
    if (!formData.password) {
      newErrors.password = 'Please enter the Password';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      
      console.log(formData);
      alert("succesfully logged up")
    
    }
  };

  return (
    <div className='theentire'>
      <div className='Thefirst'>
        <form onSubmit={handleSubmit}>
          <h1 style={{ color: 'lightblue' }}>LOGIN</h1>
          Username
          <TextField
            name="username"
            label="Username"
            value={formData.username}
            onChange={handleChange}
            error={!!errors.username}
            helperText={errors.username}
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

          <Link to="/signup">Don't have an account?</Link>
          <br>
          </br>
          <br>
          </br>
          <Button variant="contained" type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
