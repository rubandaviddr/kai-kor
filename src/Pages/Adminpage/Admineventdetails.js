import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';

function Admineventdetails() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [totalItems, setTotalItems] = useState(0);
  const [editId, setEditId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: '',
    gender: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    pincode: '',
    country: '',
    tshirtSize: '',
    companyName: '',
    designation: '',
    gstNo: '',
    website: '',
    businessCategory: '',
    amount: '',
  });
  const [editErrors, setEditErrors] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/eventregister/eventuser?page=${currentPage}&size=${rowsPerPage}`
        );
        const { data: fetchedData, total } = response.data;
        setData(fetchedData);
        setTotalItems(total);
      } catch (err) {
        console.error('Error fetching event registrations:', err);
        alert(`Failed to fetch registrations: ${err.response?.data?.message || err.message}`);
      }
    };
    fetchData();
  }, [currentPage, rowsPerPage]);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this registration?')) {
      return;
    }
    try {
      await axios.delete(`http://localhost:5000/api/eventregister/eventuser/${id}`);
      setData(data.filter((item) => item.id !== id));
      setTotalItems((prev) => prev - 1);
      alert('Registration deleted successfully');
    } catch (err) {
      console.error('Error deleting registration:', err);
      alert(`Failed to delete registration: ${err.response?.data?.message || err.message}`);
    }
  };

  const handleEdit = (id) => {
    const registration = data.find((item) => item.id === id);
    if (registration) {
      setEditId(id);
      setEditFormData({
        name: registration.name || '',
        gender: registration.gender || '',
        phone: registration.phone || '',
        email: registration.email || '',
        address: registration.address || '',
        city: registration.city || '',
        pincode: registration.pincode || '',
        country: registration.country || '',
        tshirtSize: registration.tshirtSize || '',
        companyName: registration.companyName || '',
        designation: registration.designation || '',
        gstNo: registration.gstNo || '',
        website: registration.website || '',
        businessCategory: registration.businessCategory || '',
        amount: registration.amount || '',
      });
    }
  };

  const validateEditForm = () => {
    const errs = {};
    if (!editFormData.name.trim()) errs.name = "Name is required";
    if (!editFormData.gender) errs.gender = "Gender is required";
    if (!editFormData.phone.trim()) errs.phone = "Phone is required";
    else if (!/^\d{10}$/.test(editFormData.phone.replace(/\D/g, ''))) errs.phone = "Phone must be 10 digits";
    if (!editFormData.email.trim()) errs.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(editFormData.email)) errs.email = "Invalid email format";
    if (editFormData.amount && (isNaN(editFormData.amount) || parseFloat(editFormData.amount) < 0)) {
      errs.amount = "Amount must be a valid positive number";
    }
    return errs;
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const v = validateEditForm();
    if (Object.keys(v).length > 0) {
      setEditErrors(v);
      return;
    }
    try {
      await axios.put(`http://localhost:5000/api/eventregister/eventuser/${editId}`, editFormData);
      setData(data.map((item) => (item.id === editId ? { ...item, ...editFormData } : item)));
      setEditId(null);
      setEditFormData({
        name: '',
        gender: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        pincode: '',
        country: '',
        tshirtSize: '',
        companyName: '',
        designation: '',
        gstNo: '',
        website: '',
        businessCategory: '',
        amount: '',
      });
      setEditErrors({});
      document.getElementById('editModal').classList.remove('show');
      document.body.classList.remove('modal-open');
      document.querySelector('.modal-backdrop')?.remove();
      alert('Registration updated successfully');
    } catch (err) {
      console.error('Error updating registration:', err);
      alert(`Failed to update registration: ${err.response?.data?.message || err.message}`);
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
    setEditErrors({ ...editErrors, [name]: '' });
  };

  const filteredData = data.filter((row) =>
    ['name', 'email', 'phone', 'city', 'companyName', 'designation', 'businessCategory'].some(
      (key) => row[key]?.toLowerCase().includes(search.toLowerCase())
    )
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const direction = sortConfig.direction === 'asc' ? 1 : -1;
    const aValue = a[sortConfig.key] || '';
    const bValue = b[sortConfig.key] || '';
    return aValue.localeCompare(bValue) * direction;
  });

  const totalPages = Math.ceil(totalItems / rowsPerPage);

  const handleSort = (key) => {
    setSortConfig((prev) => ({
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
    <div className="container-fluid mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="mb-0 fw-normal">Event Registrations</h4>
        <div className="d-flex align-items-center">
          <input
            type="text"
            className="form-control me-2"
            style={{ width: '250px' }}
            placeholder="Search registrations..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-hover border rounded-3">
          <thead className="">
            <tr>
              <th style={{ cursor: 'pointer' }} onClick={() => handleSort('id')}>
                ID {getSortIcon('id')}
              </th>
              <th style={{ cursor: 'pointer' }} onClick={() => handleSort('name')}>
                Name {getSortIcon('name')}
              </th>
              <th style={{ cursor: 'pointer' }} onClick={() => handleSort('gender')}>
                Gender {getSortIcon('gender')}
              </th>
              <th style={{ cursor: 'pointer' }} onClick={() => handleSort('email')}>
                Email {getSortIcon('email')}
              </th>
              <th style={{ cursor: 'pointer' }} onClick={() => handleSort('phone')}>
                Phone {getSortIcon('phone')}
              </th>
              <th style={{ cursor: 'pointer' }} onClick={() => handleSort('city')}>
                City {getSortIcon('city')}
              </th>
              <th style={{ cursor: 'pointer' }} onClick={() => handleSort('companyName')}>
                Company {getSortIcon('companyName')}
              </th>
              <th style={{ cursor: 'pointer' }} onClick={() => handleSort('amount')}>
                Amount {getSortIcon('amount')}
              </th>
              <th style={{ cursor: 'pointer' }} onClick={() => handleSort('created_at')}>
                Registered {getSortIcon('created_at')}
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.length > 0 ? (
              sortedData.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>
                    <span className={` ${row.gender}`}>
                      {row.gender}
                    </span>
                  </td>
                  <td className="text-truncate" style={{ maxWidth: '200px' }}>
                    <span title={row.email}>{row.email}</span>
                  </td>
                  <td>{row.phone}</td>
                  <td>{row.city || 'N/A'}</td>
                  <td>{row.companyName || 'N/A'}</td>
                  <td>${parseFloat(row.amount || 0).toFixed(2)}</td>
                  <td>
                    {new Date(row.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </td>
                  <td>
                    <div className="btn-group" role="group">
                      <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => handleEdit(row.id)}
                        data-bs-toggle="modal"
                        data-bs-target="#editModal"
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
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="text-center py-4">
                  <div className="text-muted">
                    <i className="bi bi-inbox fs-1 mb-3 d-block"></i>
                    <h5>No registrations found</h5>
                    {search && <p>Try adjusting your search terms</p>}
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalItems > 0 && (
        <div className="d-flex justify-content-between align-items-center mt-4">
          <div className="d-flex align-items-center">
            <label className="me-2 mb-0">Show</label>
            <select
              className="form-select form-select-sm me-2"
              style={{ width: 'auto' }}
              value={rowsPerPage}
              onChange={(e) => {
                setRowsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            <span className="text-muted">
              Showing {(currentPage - 1) * rowsPerPage + 1} to{' '}
              {Math.min(currentPage * rowsPerPage, totalItems)} of {totalItems} entries
            </span>
          </div>
          <nav>
            <ul className="pagination pagination-sm mb-0">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
              </li>
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pageNum = currentPage <= 3 
                  ? i + 1 
                  : currentPage >= totalPages - 2 
                  ? totalPages - 4 + i 
                  : currentPage - 2 + i;
                return (
                  <li key={pageNum} className={`page-item ${currentPage === pageNum ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => setCurrentPage(pageNum)}>
                      {pageNum}
                    </button>
                  </li>
                );
              })}
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Edit Modal */}
      <div className="modal fade" id="editModal" tabIndex="-1">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Registration</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                onClick={() => {
                  setEditId(null);
                  setEditFormData({
                    name: '',
                    gender: '',
                    phone: '',
                    email: '',
                    address: '',
                    city: '',
                    pincode: '',
                    country: '',
                    tshirtSize: '',
                    companyName: '',
                    designation: '',
                    gstNo: '',
                    website: '',
                    businessCategory: '',
                    amount: '',
                  });
                  setEditErrors({});
                }}
              ></button>
            </div>
            <form onSubmit={handleEditSubmit}>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">Name</label>
                    <input
                      type="text"
                      className={`form-control ${editErrors.name ? 'is-invalid' : ''}`}
                      name="name"
                      value={editFormData.name}
                      onChange={handleEditChange}
                      required
                    />
                    {editErrors.name && <div className="invalid-feedback">{editErrors.name}</div>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">Gender</label>
                    <select
                      className={`form-select ${editErrors.gender ? 'is-invalid' : ''}`}
                      name="gender"
                      value={editFormData.gender}
                      onChange={handleEditChange}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    {editErrors.gender && <div className="invalid-feedback">{editErrors.gender}</div>}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">Phone</label>
                    <input
                      type="tel"
                      className={`form-control ${editErrors.phone ? 'is-invalid' : ''}`}
                      name="phone"
                      value={editFormData.phone}
                      onChange={handleEditChange}
                      required
                    />
                    {editErrors.phone && <div className="invalid-feedback">{editErrors.phone}</div>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">Email</label>
                    <input
                      type="email"
                      className={`form-control ${editErrors.email ? 'is-invalid' : ''}`}
                      name="email"
                      value={editFormData.email}
                      onChange={handleEditChange}
                      required
                    />
                    {editErrors.email && <div className="invalid-feedback">{editErrors.email}</div>}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">City</label>
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      value={editFormData.city}
                      onChange={handleEditChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">Amount</label>
                    <input
                      type="number"
                      className={`form-control ${editErrors.amount ? 'is-invalid' : ''}`}
                      name="amount"
                      value={editFormData.amount}
                      onChange={handleEditChange}
                      step="0.01"
                    />
                    {editErrors.amount && <div className="invalid-feedback">{editErrors.amount}</div>}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">Company Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="companyName"
                      value={editFormData.companyName}
                      onChange={handleEditChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">Designation</label>
                    <input
                      type="text"
                      className="form-control"
                      name="designation"
                      value={editFormData.designation}
                      onChange={handleEditChange}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admineventdetails;