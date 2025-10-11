import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function Contactdetails() {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [totalItems, setTotalItems] = useState(0);
  const [editId, setEditId] = useState(null);
  const [editFormData, setEditFormData] = useState({ name: '', email: '', message: '' });

  // Fetch data from the API when page, rowsPerPage, or location.state changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/contacts/contactuser?page=${currentPage}&size=${rowsPerPage}`
        );
        const { data: fetchedData, total } = response.data;
        setData(fetchedData);
        setTotalItems(total);
      } catch (err) {
        console.error('Error fetching contacts:', err);
        alert('Failed to fetch contacts');
      }
    };
    fetchData();
  }, [currentPage, rowsPerPage, location.state]);

  // Handle deletion of a contact
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/contacts/contactuser/${id}`);
      setData(data.filter(item => item.id !== id));
      setTotalItems(prev => prev - 1);
    } catch (err) {
      console.error('Error deleting contact:', err);
      alert('Failed to delete contact');
    }
  };

  // Handle edit action
  const handleEdit = (id) => {
    const contact = data.find(item => item.id === id);
    if (contact) {
      setEditId(id);
      setEditFormData({ name: contact.name, email: contact.email, message: contact.message });
    }
  };

  // Handle edit form submission
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5000/api/contacts/contactuser/${editId}`, editFormData);
      setData(data.map(item => (item.id === editId ? { ...response.data } : item)));
      setEditId(null);
      setEditFormData({ name: '', email: '', message: '' });
      document.getElementById('editModal').classList.remove('show');
      document.body.classList.remove('modal-open');
      document.querySelector('.modal-backdrop')?.remove();
    } catch (err) {
      console.error('Error updating contact:', err);
      alert('Failed to update contact');
    }
  };

  // Handle edit form input change
  const handleEditChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  // Filter data based on search input
  const filteredData = data.filter(row =>
    ['name', 'email', 'message'].some(key =>
      row[key]?.toLowerCase().includes(search.toLowerCase())
    )
  );

  // Sort data based on sort configuration
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const direction = sortConfig.direction === 'asc' ? 1 : -1;
    const aValue = a[sortConfig.key] || '';
    const bValue = b[sortConfig.key] || '';
    return aValue.localeCompare(bValue) * direction;
  });

  // Calculate pagination details
  const totalPages = Math.ceil(totalItems / rowsPerPage);
  const paginatedData = sortedData; // Backend handles pagination

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
        <h4 className="fw-normal mb-0">Contact Details</h4>
        <input
          type="text"
          className="form-control w-auto"
          placeholder="Search by name, email, or message"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1); // Reset to first page on search
          }}
        />
      </div>

      {/* Data Table */}
      <div className="table-responsive">
      <table className="table table-striped table-hover border rounded-3">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th className="text-truncate" scope="col" style={{ cursor: 'pointer' }} onClick={() => handleSort('name')}>
              Name {getSortIcon('name')}
            </th>
            <th className="text-truncate" scope="col" style={{ cursor: 'pointer' }} onClick={() => handleSort('email')}>
              Email {getSortIcon('email')}
            </th>
            <th className="text-truncate" scope="col" style={{ cursor: 'pointer' }} onClick={() => handleSort('message')}>
              Message {getSortIcon('message')}
            </th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.length > 0 ? (
            paginatedData.map((row, index) => (
              <tr key={row.id}>
                <td>{(currentPage - 1) * rowsPerPage + index + 1}</td>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.message}</td>
                <td className="text-truncate">
                  <button
                    className="btn btn-sm btn-outline-primary me-2"
                    onClick={() => handleEdit(row.id)}
                    title="Edit"
                    data-bs-toggle="modal"
                    data-bs-target="#editModal"
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
      <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editModalLabel">Edit Contact</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setEditId(null);
                  setEditFormData({ name: '', email: '', message: '' });
                }}
              ></button>
            </div>
            <form onSubmit={handleEditSubmit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="editName" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="editName"
                    name="name"
                    value={editFormData.name}
                    onChange={handleEditChange}
                    placeholder="Enter Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="editEmail" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="editEmail"
                    name="email"
                    value={editFormData.email}
                    onChange={handleEditChange}
                    placeholder="Enter Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="editMessage" className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    id="editMessage"
                    name="message"
                    rows="5"
                    value={editFormData.message}
                    onChange={handleEditChange}
                    placeholder="Enter Message"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    setEditId(null);
                    setEditFormData({ name: '', email: '', message: '' });
                  }}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">Save</button>
              </div>
            </form>
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
            <option value="5">5</option>
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

export default Contactdetails;