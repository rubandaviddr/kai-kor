// src/Pages/Adminpage/Adminheader.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

function Adminheader({ onToggleSidebar }) {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const width = collapsed ? '80px' : '250px';
    onToggleSidebar(width); // Inform App.js of width
  }, [collapsed, onToggleSidebar]);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const renderText = (text) => (!collapsed ? text : null);

  return (
    <div
      className={`sidebar vh-100 position-fixed top-0 start-0 border-end ${collapsed ? 'collapsed' : ''}`}
      style={{
        width: collapsed ? '80px' : '230px',
        transition: 'width 0.3s',
        zIndex: 1040,
        overflowX: 'hidden',
        backgroundColor:"rgb(227, 235, 254)"
      }}
    >
      <div className="p-2 mt-5">
        <div className="d-flex align-items-center justify-content-between">
          {renderText(
            <Link className="nav-link mb-2 active text-dark" to="/">
              <h5 className="fw-bold fs-5 ps-3">Entrepreneur</h5>
            </Link>
          )}
          <button
            className="btn btn-sm btn-outline-secondary ms-2"
            onClick={toggleSidebar}
            title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            <i className={`fas ${collapsed ? 'fa-bars' : 'fa-times'}`}></i>
          </button>
        </div>

        <ul className="nav flex-column mt-4">
          <li className="nav-item">
            <Link className="nav-link mb-2 text-dark d-flex align-items-center" to="/logindetails">
              <i className="fas fa-address-book me-2"></i>
              {renderText('Login details')}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mb-2 text-dark d-flex align-items-center" to="/registerdetails">
              <i className="fas fa-user-plus me-2"></i>
              {renderText('Register details')}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mb-2 text-dark d-flex align-items-center" to="/contactdetails">
              <i className="fas fa-phone me-2"></i>
              {renderText('Contact details')}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mb-2 text-dark d-flex align-items-center" to="/membershipdetails">
              <i className="fas fa-id-badge me-2"></i>
              {renderText('Membership details')}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mb-2 text-dark d-flex align-items-center" to="/admineventdetails">
              <i className="fas fa-calendar-alt me-2"></i>
              {renderText('Admin event details')}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mb-2 text-dark d-flex align-items-center" to="/membershipimg">
              <i className="fas fa-image me-2"></i>
              {renderText('Membership image')}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Adminheader;
