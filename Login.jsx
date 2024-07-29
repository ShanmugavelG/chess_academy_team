import React, { useState, useEffect } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getalldata } from '../axios'; // Ensure this path is correct
import '../asserts/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [userdata, setUserdata] = useState({ email: "", password: "" });
  const [ldata, setLData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await getalldata();
        setLData(res.data);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
      }
    };
    fetchdata();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserdata({ ...userdata, [name]: value });
  };

  const validate = () => {
    const { email, password } = userdata;
    const emailRegex = /\S+@\S+\.\S+/;
    let isValid = true;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      isValid = false;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validate()) {
      try {
        const em = userdata.email;
        const pass = userdata.password;
        const emailexist = ldata.findIndex((user) => user.email === em);
        if (emailexist === -1) {
          alert("Invalid Email");
        } else if (emailexist !== -1 && ldata[emailexist].pass === pass) {
          alert("Successfully Logged in");
          navigate('/Home');
        } else {
          alert("Incorrect password");
        }
      } catch (error) {
        console.error("There was an error logging in!", error);
      }
    }
  };

  return (
    <div className='parent'>
      <div className='parent-top-login'>CHESS ARCADE</div>
      <div className='child'>
        <h1>Login</h1>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > :not(style)': { m: 1 },
          }}
        >
          <TextField
            helperText="Please enter your Email or Phone"
            label='Email'
            name='email'
            onChange={handleChange}
            value={userdata.email}
            fullWidth
          />
          <TextField
            helperText="Please enter your password"
            label='Password'
            type='password'
            name='password'
            onChange={handleChange}
            value={userdata.password}
            fullWidth
          />
        </Box>
        <Button variant="contained" onClick={handleSubmit}>Login</Button>
        <br />
        <Button onClick={() => navigate('/Signup')}>Create a new account</Button>
      </div>
    </div>
  );
};

export default Login;
