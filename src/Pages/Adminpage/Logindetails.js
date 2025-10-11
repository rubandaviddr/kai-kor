import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import CryptoJS from 'crypto-js';

function Logindetails() {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [totalItems, setTotalItems] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [editLogin, setEditLogin] = useState({ id: null, email: '', password: '' });

  const secretKey = 'my-secret-key';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/logins/loginuser?page=${currentPage}&size=${rowsPerPage}`
        );
        const { data: fetchedData, total } = response.data;
        setData(
          fetchedData.map(item => ({
            id: item.id,
            email: item.email,
            password: CryptoJS.AES.decrypt(item.password, secretKey).toString(CryptoJS.enc.Utf8),
          }))
        );
        setTotalItems(total);
      } catch (err) {
        console.error('Error fetching logins:', err);
      }
    };
    fetchData();
  }, [currentPage, rowsPerPage, location.state]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/logins/loginuser/${id}`);
      setData(data.filter(item => item.id !== id));
      setTotalItems(prev => prev - 1);
    } catch (err) {
      console.error('Error deleting login:', err);
    }
  };

  const handleEdit = (id) => {
    const login = data.find(item => item.id === id);
    setEditLogin({ id, email: login.email, password: login.password });
    setShowModal(true);
  };

  const handleSaveEdit = async () => {
    try {
      const encryptedPassword = CryptoJS.AES.encrypt(editLogin.password, secretKey).toString();
      await axios.put(`http://localhost:5000/api/logins/loginuser/${editLogin.id}`, {
        email: editLogin.email,
        password: encryptedPassword,
      });
      setData(data.map(item =>
        item.id === editLogin.id
          ? { ...item, email: editLogin.email, password: editLogin.password }
          : item
      ));
      setShowModal(false);
    } catch (err) {
      console.error('Error updating login:', err);
    }
  };

  const filteredData = data.filter(row =>
    ['email', 'password'].some(key =>
      row[key].toLowerCase().includes(search.toLowerCase())
    )
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const direction = sortConfig.direction === 'asc' ? 1 : -1;
    return a[sortConfig.key].localeCompare(b[sortConfig.key]) * direction;
  });

  const totalPages = Math.ceil(totalItems / rowsPerPage);
  const paginatedData = sortedData;

  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return <i className="bi bi-arrow-down-up ms-1"></i>;
    return sortConfig.direction === 'asc' ? (
      <i className="bi bi-arrow-up ms-1"></i>
    ) : (
      <i className="bi bi-arrow-down ms-1"></i>
    );
  };

  return (
    <div className="container mt-5">
      <div className="d-flex align-items-center mb-4 justify-content-between">
        <h4 className="fw-normal mb-0">Login Details</h4>
        <input
          type="text"
          className="form-control w-auto"
          placeholder="Search by email or password"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      <div class="table-responsive">
      <table className="table table-striped table-hover border rounded-3">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col" style={{ cursor: 'pointer' }} onClick={() => handleSort('email')}>
              Email {getSortIcon('email')}
            </th>
            <th scope="col" style={{ cursor: 'pointer' }} onClick={() => handleSort('password')}>
              Password {getSortIcon('password')}
            </th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.length > 0 ? (
            paginatedData.map((row, index) => (
              <tr key={row.id}>
                <td>{(currentPage - 1) * rowsPerPage + index + 1}</td>
                <td>{row.email}</td>
                <td>{row.password}</td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-primary me-2"
                    onClick={() => handleEdit(row.id)}
                    title="Edit"
                  >
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => handleDelete(row.id)}
                    title="Delete"
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No entries found
              </td>
            </tr>
          )}
        </tbody>
      </table>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <label className="me-2">Show</label>
          <select
            className="form-select w-auto"
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
          <span className="ms-2">Entries</span>
        </div>

        <div>
          Showing{' '}
          {data.length === 0 ? 0 : (currentPage - 1) * rowsPerPage + 1} to{' '}
          {(currentPage - 1) * rowsPerPage + data.length} of {totalItems} entries
        </div>

        <div className="d-flex align-items-center">
          <div className="me-3">
            Page {currentPage} of {totalPages}
          </div>
          <button
            className="btn btn-sm btn-outline-secondary me-2"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            className="btn btn-sm btn-outline-secondary"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => prev + 1)}
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>

      {/* Bootstrap Modal for Editing */}
      <div className={`modal fade ${showModal ? 'show d-block' : ''}`} tabIndex="-1" style={{ backgroundColor: showModal ? 'rgba(0,0,0,0.5)' : 'transparent' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Login</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowModal(false)}
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="editEmail" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="editEmail"
                  value={editLogin.email}
                  onChange={(e) => setEditLogin({ ...editLogin, email: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="editPassword" className="form-label">Password</label>
                <input
                  type="text"
                  className="form-control"
                  id="editPassword"
                  value={editLogin.password}
                  onChange={(e) => setEditLogin({ ...editLogin, password: e.target.value })}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSaveEdit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logindetails;