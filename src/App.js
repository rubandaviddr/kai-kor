// src/App.js

import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Pages
import Header from './Header';
import Footer from './Footer';
import Adminheader from './Pages/Adminpage/Adminheader';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Events from './Pages/Events/Events';
import Eventdetails from './Pages/Events/Eventdetails';
import Membership from './Pages/Membership/Membership';
import Contact from './Pages/Contact/Contact';
import Register from './Pages/Register/Register';
import Eventregistration from './Pages/Eventregistration/Eventregistration';
import Membershipregistration from './Pages/Membershipregistration/Membershipregistration';
import Login from './Pages/Login/Login';

// Admin Pages
import Logindetails from './Pages/Adminpage/Logindetails';
import Registerdetails from './Pages/Adminpage/Registerdetails';
import Contactdetails from './Pages/Adminpage/Contactdetails';
import Membershipimg from './Pages/Adminpage/Membershipimg';
import Membershipdetails from './Pages/Adminpage/Membershipdetails';
import Admineventdetails from './Pages/Adminpage/Admineventdetails';

function App() {
  const location = useLocation();
  const normalizedPath = location.pathname.toLowerCase().replace(/\/+$/, '');
  const [sidebarWidth, setSidebarWidth] = useState('250px');

  const adminPaths = [
    '/logindetails',
    '/registerdetails',
    '/contactdetails',
    '/membershipimg',
    '/membershipdetails',
    '/admineventdetails',
  ];

  const hiddenPaths = ['/contact', '/login', '/register', ...adminPaths];

  const isAdminPage = adminPaths.includes(normalizedPath);
  const showFooter = !hiddenPaths.includes(normalizedPath);

  return (
    <div className="App overflow-hidden">
      {isAdminPage ? <Adminheader onToggleSidebar={setSidebarWidth} /> : <Header />}

      <div className={isAdminPage ? 'd-flex' : ''}>
        <div
          className={isAdminPage ? 'flex-grow-1' : ''}
          style={{
            marginLeft: isAdminPage ? sidebarWidth : '0',
            transition: 'margin-left 0.3s',
          }}
        >
          <div className="container-fluid px-0">
            <Routes>
              {/* Public Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/eventdetails/:id" element={<Eventdetails />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Register />} />
              <Route path="/eventregistration" element={<Eventregistration />} />
              <Route path="/membershipregistration" element={<Membershipregistration />} />
              <Route path="/login" element={<Login />} />

              {/* Admin Pages */}
              <Route path="/logindetails" element={<Logindetails />} />
              <Route path="/registerdetails" element={<Registerdetails />} />
              <Route path="/contactdetails" element={<Contactdetails />} />
              <Route path="/membershipimg" element={<Membershipimg />} />
              <Route path="/membershipdetails" element={<Membershipdetails />} />
              <Route path="/admineventdetails" element={<Admineventdetails />} />
            </Routes>

            {showFooter && <Footer />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
