import React, { useEffect, useState } from 'react';

function Membershipimg() {
    const [users, setUsers] = useState([]);
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 20;
    const [files, setFiles] = useState([]);
    const [namesFromFile, setNamesFromFile] = useState([]);
    const [category, setCategory] = useState('');
    const [editingUser, setEditingUser] = useState(null);
    const [editFile, setEditFile] = useState(null);
    const [editName, setEditName] = useState('');
    const [editCategory, setEditCategory] = useState('');

    useEffect(() => {
        fetchUsers(currentPage);
    }, [currentPage]);

    const fetchUsers = async (page) => {
        try {
            const res = await fetch(`http://localhost:5000/api/membershipproduct/membershipimguser?page=${page}&size=${pageSize}`);
            if (!res.ok) throw new Error('Failed to fetch');

            const { data, total } = await res.json();
            setUsers(data || []);   // fallback to [] if undefined
            setTotal(total || 0);
        } catch (err) {
            console.error('Fetch error:', err);
            setUsers([]);   // prevent crash
            setTotal(0);
            alert('Failed to fetch users');
        }
    };


    const handleTextFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const text = event.target.result;
            const lines = text
                .split('\n')
                .map((line) => line.trim())
                .filter((line) => line.length > 0);
            setNamesFromFile(lines);
        };
        reader.readAsText(file);
    };

    const handleFileChange = (e) => {
        setFiles(Array.from(e.target.files));
    };

    const handleEditFileChange = (e) => {
        setEditFile(e.target.files[0]);
    };

    const resetForm = () => {
        setFiles([]);
        setNamesFromFile([]);
        setCategory('');
        document.getElementById('dp-input').value = null;
        document.getElementById('name-file-input').value = null;
        document.getElementById('category-input').value = '';
    };

    const resetEditForm = () => {
        setEditingUser(null);
        setEditFile(null);
        setEditName('');
        setEditCategory('');
        document.getElementById('edit-dp-input').value = null;
        document.getElementById('edit-name-input').value = '';
        document.getElementById('edit-category-input').value = '';
    };

    const uploadImages = async () => {
        if (files.length === 0) {
            alert("Please select at least one image.");
            return;
        }

        try {
            const formData = new FormData();
            files.forEach((file, index) => {
                formData.append('dp', file);
                formData.append('names', namesFromFile[index] || 'N/A'); // Default to 'N/A'
            });
            formData.append('category', category || '');

            const res = await fetch('http://localhost:5000/api/membershipproduct/membershipimguser/bulk', {
                method: 'POST',
                body: formData,
            });

            if (!res.ok) throw new Error('Failed to upload images');

            const newUsers = await res.json();
            fetchUsers(currentPage);
            resetForm();
        } catch (err) {
            console.error('Bulk upload error:', err);
            alert('Failed to upload images');
        }
    };

    const updateImage = async (id) => {
        if (!editFile || !editName) {
            alert("Please provide both image and name for update.");
            return;
        }

        try {
            const formData = new FormData();
            formData.append('dp', editFile);
            formData.append('name', editName);
            formData.append('category', editCategory || '');

            const res = await fetch(`http://localhost:5000/api/membershipproduct/membershipimguser/${id}`, {
                method: 'PUT',
                body: formData,
            });

            if (!res.ok) throw new Error('Failed to update image');

            const updatedUser = await res.json();
            setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
            resetEditForm();
        } catch (err) {
            console.error('Update error:', err);
            alert('Failed to update image');
        }
    };

    const deleteUser = async (id) => {
        try {
            const res = await fetch(`http://localhost:5000/api/membershipproduct/membershipimguser/${id}`, {
                method: 'DELETE',
            });
            if (!res.ok) throw new Error('Failed to delete image');
            fetchUsers(currentPage);
        } catch (err) {
            console.error('Delete error:', err);
            alert('Failed to delete image');
        }
    };

    const totalPages = Math.ceil(total / pageSize);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="container mt-5">
            <h4 class="mb-4 fw-normal"> Membership product upload</h4>

            <div className="row g-2 mb-3">
                <div className="col-md-12 d-flex align-items-center gap-3">
                    <div class="mb-3">
                        <label className="form-label">Upload text file:</label>
                        <input
                            id="name-file-input"
                            title="Upload text file (.txt) with one name per line (optional):"
                            className="form-control mb-2"
                            type="file"
                            accept=".txt"
                            onChange={handleTextFileChange}
                        />
                    </div>
                    <div class="mb-3">
                        <label className="form-label">Images category name:</label>
                        <input
                            id="category-input"
                            className="form-control mb-2"
                            type="text"
                            placeholder="Enter category (e.g., Profile)"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>
                    <div class="mb-3">
                        <label className="form-label">Upload image files:</label>
                        <input
                            id="dp-input"
                            className="form-control"
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleFileChange}
                        />
                    </div>
                    <div class="">
                        <button className="btn btn-success w-100 mt-2" onClick={uploadImages}>
                            Upload ({files.length} images / {namesFromFile.length} names)
                        </button>
                    </div>
                </div>
            </div>

            {editingUser && (
                <div className="row g-2 mb-3">
                    <div className="col-md-5">
                        <label className="form-label">Edit name:</label>
                        <input
                            id="edit-name-input"
                            className="form-control mb-2"
                            type="text"
                            placeholder="Enter name"
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                        />
                        <label className="form-label">Edit category:</label>
                        <input
                            id="edit-category-input"
                            className="form-control mb-2"
                            type="text"
                            placeholder="Enter category"
                            value={editCategory}
                            onChange={(e) => setEditCategory(e.target.value)}
                        />
                        <label className="form-label">Replace image:</label>
                        <input
                            id="edit-dp-input"
                            className="form-control"
                            type="file"
                            accept="image/*"
                            onChange={handleEditFileChange}
                        />
                    </div>
                    <div className="col-md-3 d-flex flex-column justify-content-end">
                        <button
                            className="btn btn-primary mb-2"
                            onClick={() => updateImage(editingUser.id)}
                        >
                            Update
                        </button>
                        <button className="btn btn-secondary" onClick={resetEditForm}>
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            <div style={{ maxHeight: '400px', overflowY: 'scroll' }}>
                <table className="table table-striped table-bordered">
                    <thead >
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <td>{(currentPage - 1) * pageSize + index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.category || 'N/A'}</td>
                                <td>
                                    {user.dp && (
                                        <img
                                            src={`http://localhost:5000${user.dp}`}
                                            alt="dp"
                                            width="50"
                                            height="50"
                                            style={{ objectFit: 'cover' }}
                                            onError={(e) => (e.target.style.display = 'none')}
                                        />
                                    )}
                                </td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-primary me-2"
                                        onClick={() => {
                                            setEditingUser(user);
                                            setEditName(user.name);
                                            setEditCategory(user.category || '');
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => deleteUser(user.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <nav aria-label="Pagination" className="mt-3">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
                    </li>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(page)}>{page}</button>
                        </li>
                    ))}
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Membershipimg;