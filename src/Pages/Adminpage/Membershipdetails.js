import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function Membershipdetails() {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [totalItems, setTotalItems] = useState(0);
  const [editId, setEditId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    startupName: '',
    startupStage: '',
    industry: '',
    journey: '',
    vision: '',
    whyJoin: '',
    referral: '',
    nextPlans: '',
  });
  const [editErrors, setEditErrors] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/membershipregister/membershipuser?page=${currentPage}&size=${rowsPerPage}`
        );
        const { data: fetchedData, total } = response.data;
        setData(fetchedData);
        setTotalItems(total);
      } catch (err) {
        console.error('Error fetching memberships:', err);
        alert(`Failed to fetch memberships: ${err.response?.data?.message || err.message}`);
      }
    };
    fetchData();
  }, [currentPage, rowsPerPage, location.state]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/membershipregister/membershipuser/${id}`);
      setData(data.filter((item) => item.id !== id));
      setTotalItems((prev) => prev - 1);
      alert('Membership deleted successfully');
    } catch (err) {
      console.error('Error deleting membership:', err);
      alert(`Failed to delete membership: ${err.response?.data?.message || err.message}`);
    }
  };

  const handleEdit = (id) => {
    const membership = data.find((item) => item.id === id);
    if (membership) {
      setEditId(id);
      setEditFormData({
        name: membership.name,
        email: membership.email,
        phone: membership.phone,
        city: membership.city,
        startupName: membership.startupName,
        startupStage: membership.startupStage,
        industry: membership.industry,
        journey: membership.journey,
        vision: membership.vision,
        whyJoin: membership.whyJoin,
        referral: membership.referral,
        nextPlans: membership.nextPlans,
      });
    }
  };

  const validateEditForm = () => {
    const errs = {};
    if (!editFormData.name) errs.name = "Full Name is required";
    if (!editFormData.email) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(editFormData.email)) errs.email = "Invalid email format";
    if (!editFormData.phone) errs.phone = "Phone is required";
    else if (!/^\d{10}$/.test(editFormData.phone)) errs.phone = "Phone must be 10 digits";
    if (!editFormData.city) errs.city = "City is required";
    if (!editFormData.startupName) errs.startupName = "Startup Name is required";
    if (!editFormData.startupStage) errs.startupStage = "Startup Stage is required";
    else if (!["idea", "early", "growth", "scale"].includes(editFormData.startupStage))
      errs.startupStage = "Invalid Startup Stage";
    if (!editFormData.industry) errs.industry = "Industry is required";
    if (!editFormData.journey) errs.journey = "Startup Journey is required";
    if (!editFormData.vision) errs.vision = "Vision is required";
    if (!editFormData.whyJoin) errs.whyJoin = "Reason for joining is required";
    if (!editFormData.nextPlans) errs.nextPlans = "Next Plans are required";
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
      const response = await axios.put(`http://localhost:5000/api/membershipregister/membershipuser/${editId}`, editFormData);
      setData(data.map((item) => (item.id === editId ? { ...response.data } : item)));
      setEditId(null);
      setEditFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        startupName: '',
        startupStage: '',
        industry: '',
        journey: '',
        vision: '',
        whyJoin: '',
        referral: '',
        nextPlans: '',
      });
      setEditErrors({});
      document.getElementById('editModal').classList.remove('show');
      document.body.classList.remove('modal-open');
      document.querySelector('.modal-backdrop')?.remove();
      alert('Membership updated successfully');
    } catch (err) {
      console.error('Error updating membership:', err);
      alert(`Failed to update membership: ${err.response?.data?.message || err.message}`);
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
    setEditErrors({ ...editErrors, [name]: '' });
  };

  const filteredData = data.filter((row) =>
    ['id', 'name', 'email', 'phone', 'city', 'startupName', 'startupStage', 'industry', 'journey', 'vision', 'whyJoin', 'referral', 'nextPlans', 'created_at'].some(
      (key) => row[key]?.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const direction = sortConfig.direction === 'asc' ? 1 : -1;
    const aValue = a[sortConfig.key]?.toString() || '';
    const bValue = b[sortConfig.key]?.toString() || '';
    return aValue.localeCompare(bValue) * direction;
  });

  const totalPages = Math.ceil(totalItems / rowsPerPage);
  const paginatedData = sortedData;

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
    <div className="container mt-5">
      <div className="d-flex align-items-center mb-4 justify-content-between">
        <h4 className="fw-normal mb-0">Membership Details</h4>
        <input
          type="text"
          className="form-control w-auto"
          placeholder="Search memberships"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-hover border rounded-3">
          <thead>
            <tr>
              <th scope="col" class="text-truncate" style={{ cursor: 'pointer' }} onClick={() => handleSort('id')}>
                ID {getSortIcon('id')}
              </th>
              <th scope="col" class="text-truncate" style={{ cursor: 'pointer' }} onClick={() => handleSort('name')}>
                Name {getSortIcon('name')}
              </th>
              <th scope="col" class="text-truncate" style={{ cursor: 'pointer' }} onClick={() => handleSort('email')}>
                Email {getSortIcon('email')}
              </th>
              <th scope="col" class="text-truncate" style={{ cursor: 'pointer' }} onClick={() => handleSort('phone')}>
                Phone {getSortIcon('phone')}
              </th>
              <th scope="col" class="text-truncate" style={{ cursor: 'pointer' }} onClick={() => handleSort('city')}>
                City {getSortIcon('city')}
              </th>
              <th scope="col" class="text-truncate" style={{ cursor: 'pointer' }} onClick={() => handleSort('startupName')}>
                Startup Name {getSortIcon('startupName')}
              </th>
              <th scope="col" class="text-truncate" style={{ cursor: 'pointer' }} onClick={() => handleSort('startupStage')}>
                Stage {getSortIcon('startupStage')}
              </th>
              <th scope="col" class="text-truncate" style={{ cursor: 'pointer' }} onClick={() => handleSort('industry')}>
                Industry {getSortIcon('industry')}
              </th>
              <th scope="col" class="text-truncate" style={{ cursor: 'pointer' }} onClick={() => handleSort('journey')}>
                Journey {getSortIcon('journey')}
              </th>
              <th scope="col" class="text-truncate" style={{ cursor: 'pointer' }} onClick={() => handleSort('vision')}>
                Vision {getSortIcon('vision')}
              </th>
              <th scope="col" class="text-truncate" style={{ cursor: 'pointer' }} onClick={() => handleSort('whyJoin')}>
                Why Join {getSortIcon('whyJoin')}
              </th>
              <th scope="col" class="text-truncate" style={{ cursor: 'pointer' }} onClick={() => handleSort('referral')}>
                Referral {getSortIcon('referral')}
              </th>
              <th scope="col" class="text-truncate" style={{ cursor: 'pointer' }} onClick={() => handleSort('nextPlans')}>
                Next Plans {getSortIcon('nextPlans')}
              </th>
              <th scope="col" class="text-truncate" style={{ cursor: 'pointer' }} onClick={() => handleSort('created_at')}>
                Created At {getSortIcon('created_at')}
              </th>
              <th scope="col" class="text-truncate">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((row, index) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.phone}</td>
                  <td>{row.city}</td>
                  <td>{row.startupName}</td>
                  <td>{row.startupStage}</td>
                  <td>{row.industry}</td>
                  <td className="text-truncate" style={{ minWidth: '250px',whiteSpace: "pre-wrap",wordWrap: 'break-word' }}>{row.journey}</td>
                  <td className="text-truncate" style={{ maxWidth: '150px' }}>{row.vision}</td>
                  <td className="text-truncate" style={{ maxWidth: '150px' }}>{row.whyJoin}</td>
                  <td>{row.referral || 'N/A'}</td>
                  <td className="text-truncate" style={{ maxWidth: '150px' }}>{row.nextPlans}</td>
                  <td>{new Date(row.created_at).toLocaleString()}</td>
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
                <td colSpan="15" className="text-center">
                  No entries found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editModalLabel">Edit Membership</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setEditId(null);
                  setEditFormData({
                    name: '',
                    email: '',
                    phone: '',
                    city: '',
                    startupName: '',
                    startupStage: '',
                    industry: '',
                    journey: '',
                    vision: '',
                    whyJoin: '',
                    referral: '',
                    nextPlans: '',
                  });
                  setEditErrors({});
                }}
              ></button>
            </div>
            <form onSubmit={handleEditSubmit}>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="editName" className="form-label">Name *</label>
                    <input
                      type="text"
                      className={`form-control ${editErrors.name ? 'is-invalid' : ''}`}
                      id="editName"
                      name="name"
                      value={editFormData.name}
                      onChange={handleEditChange}
                      placeholder="Enter Name"
                      required
                    />
                    {editErrors.name && <div className="invalid-feedback">{editErrors.name}</div>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="editEmail" className="form-label">Email *</label>
                    <input
                      type="email"
                      className={`form-control ${editErrors.email ? 'is-invalid' : ''}`}
                      id="editEmail"
                      name="email"
                      value={editFormData.email}
                      onChange={handleEditChange}
                      placeholder="Enter Email"
                      required
                    />
                    {editErrors.email && <div className="invalid-feedback">{editErrors.email}</div>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="editPhone" className="form-label">Phone *</label>
                    <input
                      type="tel"
                      className={`form-control ${editErrors.phone ? 'is-invalid' : ''}`}
                      id="editPhone"
                      name="phone"
                      value={editFormData.phone}
                      onChange={handleEditChange}
                      placeholder="Enter Phone"
                      required
                    />
                    {editErrors.phone && <div className="invalid-feedback">{editErrors.phone}</div>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="editCity" className="form-label">City *</label>
                    <input
                      type="text"
                      className={`form-control ${editErrors.city ? 'is-invalid' : ''}`}
                      id="editCity"
                      name="city"
                      value={editFormData.city}
                      onChange={handleEditChange}
                      placeholder="Enter City"
                      required
                    />
                    {editErrors.city && <div className="invalid-feedback">{editErrors.city}</div>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="editStartupName" className="form-label">Startup Name *</label>
                    <input
                      type="text"
                      className={`form-control ${editErrors.startupName ? 'is-invalid' : ''}`}
                      id="editStartupName"
                      name="startupName"
                      value={editFormData.startupName}
                      onChange={handleEditChange}
                      placeholder="Enter Startup Name"
                      required
                    />
                    {editErrors.startupName && <div className="invalid-feedback">{editErrors.startupName}</div>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="editStartupStage" className="form-label">Startup Stage *</label>
                    <select
                      className={`form-control ${editErrors.startupStage ? 'is-invalid' : ''}`}
                      id="editStartupStage"
                      name="startupStage"
                      value={editFormData.startupStage}
                      onChange={handleEditChange}
                      required
                    >
                      <option value="">Select</option>
                      <option value="idea">Idea Stage</option>
                      <option value="early">Early Stage</option>
                      <option value="growth">Growth Stage</option>
                      <option value="scale">Scaling</option>
                    </select>
                    {editErrors.startupStage && <div className="invalid-feedback">{editErrors.startupStage}</div>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="editIndustry" className="form-label">Industry *</label>
                    <input
                      type="text"
                      className={`form-control ${editErrors.industry ? 'is-invalid' : ''}`}
                      id="editIndustry"
                      name="industry"
                      value={editFormData.industry}
                      onChange={handleEditChange}
                      placeholder="Enter Industry"
                      required
                    />
                    {editErrors.industry && <div className="invalid-feedback">{editErrors.industry}</div>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="editJourney" className="form-label">Journey *</label>
                    <textarea
                      className={`form-control ${editErrors.journey ? 'is-invalid' : ''}`}
                      id="editJourney"
                      name="journey"
                      rows="3"
                      value={editFormData.journey}
                      onChange={handleEditChange}
                      placeholder="Enter Journey"
                      required
                    ></textarea>
                    {editErrors.journey && <div className="invalid-feedback">{editErrors.journey}</div>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="editVision" className="form-label">Vision *</label>
                    <textarea
                      className={`form-control ${editErrors.vision ? 'is-invalid' : ''}`}
                      id="editVision"
                      name="vision"
                      rows="3"
                      value={editFormData.vision}
                      onChange={handleEditChange}
                      placeholder="Enter Vision"
                      required
                    ></textarea>
                    {editErrors.vision && <div className="invalid-feedback">{editErrors.vision}</div>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="editWhyJoin" className="form-label">Why Join *</label>
                    <textarea
                      className={`form-control ${editErrors.whyJoin ? 'is-invalid' : ''}`}
                      id="editWhyJoin"
                      name="whyJoin"
                      rows="2"
                      value={editFormData.whyJoin}
                      onChange={handleEditChange}
                      placeholder="Enter Reason for Joining"
                      required
                    ></textarea>
                    {editErrors.whyJoin && <div className="invalid-feedback">{editErrors.whyJoin}</div>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="editReferral" className="form-label">Referral</label>
                    <input
                      type="text"
                      className="form-control"
                      id="editReferral"
                      name="referral"
                      value={editFormData.referral}
                      onChange={handleEditChange}
                      placeholder="Enter Referral (if any)"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="editNextPlans" className="form-label">Next Plans *</label>
                    <textarea
                      className={`form-control ${editErrors.nextPlans ? 'is-invalid' : ''}`}
                      id="editNextPlans"
                      name="nextPlans"
                      rows="3"
                      value={editFormData.nextPlans}
                      onChange={handleEditChange}
                      placeholder="Enter Next Plans"
                      required
                    ></textarea>
                    {editErrors.nextPlans && <div className="invalid-feedback">{editErrors.nextPlans}</div>}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    setEditId(null);
                    setEditFormData({
                      name: '',
                      email: '',
                      phone: '',
                      city: '',
                      startupName: '',
                      startupStage: '',
                      industry: '',
                      journey: '',
                      vision: '',
                      whyJoin: '',
                      referral: '',
                      nextPlans: '',
                    });
                    setEditErrors({});
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

      <div className="d-flex justify-content-between align-items-center mt-4">
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
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
          <span className="ms-2">Entries</span>
        </div>
        <div>
          Showing {data.length === 0 ? 0 : (currentPage - 1) * rowsPerPage + 1} to{' '}
          {(currentPage - 1) * rowsPerPage + data.length} of {totalItems} entries
        </div>
        <div className="d-flex align-items-center">
          <div className="me-3">
            Page {currentPage} of {totalPages}
          </div>
          <button
            className="btn btn-sm btn-outline-secondary me-2"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            className="btn btn-sm btn-outline-secondary"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Membershipdetails;