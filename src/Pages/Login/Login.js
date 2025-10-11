import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/logins/loginuser', formData);
      navigate('/', { state: response.data });
    } catch (err) {
      console.error('Error saving login:', err);
      alert('Failed to save login');
    }
  };

  return (
    <div className="container">
      <div className="col-lg-4 mx-auto mt-5 mb-5 pt-4 pb-4">
        <div className="text-center">
          <h2>Login</h2>
        </div>
        <div className="mt-4">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
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
            <label htmlFor="password" className="form-label">Password</label>
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
            <p>New Here?</p>
            <Link to="/register">Register</Link>
          </div>
          <div className="text-center">
            <button className="btn btn-primary" type="button" onClick={handleSubmit}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;