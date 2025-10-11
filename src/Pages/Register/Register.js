import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({fullName: '',email: '',password: ''});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/registers/registeruser', formData);
      navigate('/registerdetails', { state: response.data });
    } catch (err) {
      console.error('Error saving registration:', err);
      alert('Failed to save registration');
    }
  };

  return (
    <div className="container">
      <div className="col-lg-4 mx-auto mt-5 mb-5 pt-4 pb-4">
        <div className="text-center">
          <h2>Register</h2>
        </div>
        <div className="mt-4">
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>
          <div className="d-flex gap-2">
            <p>Already have an account?</p>
            <Link to="/login">Login</Link>
          </div>
          <div className="text-center">
            <button className="btn btn-primary" type="button" onClick={handleSubmit}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;