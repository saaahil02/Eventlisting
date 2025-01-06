
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Styles/createuser.css';

function CreateUser() {
  const [formData, setFormData] = useState({ name: '', email: '', image: '', description: '' });
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/create', formData);
      alert('User Created: ' + response.data.name);
      setFormData({ name: '', email: '', image: '',description:'' });
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Create User</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h3 className="label">Enter Your Name</h3>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <h3 className="label">Enter Your Email</h3>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <h3 className="label">Enter Image URL</h3>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <h3 className="label">Enter Description</h3>
          <textarea
            name="description"
            placeholder="Enter a detailed description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            cols="50"
          ></textarea>
        </div>

        <button className="submit-button" type="submit" onClick={() => navigate('/listevent')}>
          List Event
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
