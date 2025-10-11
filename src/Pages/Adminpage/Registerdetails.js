import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import CryptoJS from 'crypto-js';

// Component to display and manage registration details in a table
function Registerdetails() {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [totalItems, setTotalItems] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState({ id: '', fullName: '', email: '', password: '' });

  // Secret key for CryptoJS encryption/decryption
  const secretKey = 'my-secret-key';

  // Fetch data from the API when page or rowsPerPage changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/registers/registeruser?page=${currentPage}&size=${rowsPerPage}`
        );
        const { data: fetchedData, total } = response.data;
        setData(
          fetchedData.map(item => ({
            id: item.id,
            fullName: item.fullName,
            email: item.email,
            password: CryptoJS.AES.decrypt(item.password, secretKey).toString(CryptoJS.enc.Utf8),
          }))
        );
        setTotalItems(total);
      } catch (err) {
        console.error('Error fetching registrations:', err);
      }
    };
    fetchData();
  }, [currentPage, rowsPerPage, location.state]);

  // Handle deletion of a registration
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/registers/registeruser/${id}`);
      setData(data.filter(item => item.id !== id));
      setTotalItems(prev => prev - 1);
    } catch (err) {
      console.error('Error deleting registration:', err);
    }
  };

  // Handle edit action
  const handleEdit = (item) => {
    setEditData(item);
    setShowModal(true);
  };

  // Handle form submission for editing
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const encryptedPassword = CryptoJS.AES.encrypt(editData.password, secretKey).toString();
      await axios.put(`http://localhost:5000/api/registers/registeruser/${editData.id}`, {
        fullName: editData.fullName,
        email: editData.email,
        password: encryptedPassword,
      });
      setData(
        data.map(item =>
          item.id === editData.id
            ? { ...item, fullName: editData.fullName, email: editData.email, password: editData.password }
            : item
        )
      );
      setShowModal(false);
    } catch (err) {
      console.error('Error updating registration:', err);
    }
  };

  // Filter data based on search input
  const filteredData = data.filter(row =>
    ['fullName', 'email', 'password'].some(key =>
      row[key].toLowerCase().includes(search.toLowerCase())
    )
  );

  // Sort data based on sort configuration
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const direction = sortConfig.direction === 'asc' ? 1 : -1;
    return a[sortConfig.key].localeCompare(b[sortConfig.key]) * direction;
  });

  // Calculate pagination details
  const totalPages = Math.ceil(totalItems / rowsPerPage);
  const paginatedData = sortedData;

  // Handle column sorting
  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  // Get sort icon for table headers
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
      {/* Header and Search Bar */}
      <div className="d-flex align-items-center mb-4 justify-content-between">
        <h4 className="fw-normal mb-0">Registration Details</h4>
        <input
          type="text"
          className="form-control w-auto"
          placeholder="Search by name, email, or password"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* Data Table */}
      <div className="table-responsive">
      <table className="table table-striped table-hover border rounded-3">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col" style={{ cursor: 'pointer' }} onClick={() => handleSort('fullName')}>
              Full Name {getSortIcon('fullName')}
            </th>
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
                <td>{row.fullName}</td>
                <td>{row.email}</td>
                <td>{row.password}</td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-primary me-2"
                    onClick={() => handleEdit(row)}
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
              <td colSpan="5" className="text-center">
                No entries found
              </td>
            </tr>
          )}
        </tbody>
      </table>
      </div>

      {/* Edit Modal */}
      <div className={`modal fade ${showModal ? 'show d-block' : ''}`} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Registration</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowModal(false)}
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={editData.fullName}
                  onChange={(e) => setEditData({ ...editData, fullName: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={editData.email}
                  onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={editData.password}
                  onChange={(e) => setEditData({ ...editData, password: e.target.value })}
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
                onClick={handleEditSubmit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination and Entries Control */}
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
    </div>
  );
}

export default Registerdetails;