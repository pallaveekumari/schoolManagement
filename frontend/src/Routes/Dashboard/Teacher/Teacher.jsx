import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import styles from "../Student/Student.module.css"
const Student = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <Box className={styles.mainContainer}>
    <form onSubmit={handleSubmit}>
      <h1>Teacher</h1>
      <TextField
        label="First Name"
        variant="outlined"
        fullWidth
        margin="normal"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <TextField
        label="Last Name"
        variant="outlined"
        fullWidth
        margin="normal"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
        </Box>
  );
};

export default Student;
