import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";

const Eventregistration = () => {
  const initialState = {
    name: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    country: "",
    tshirtSize: "",
    companyName: "",
    designation: "",
    gstNo: "",
    website: "",
    businessCategory: "",
    amount: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fd) => ({
      ...fd,
      [name]: value,
    }));
    // Clear error for this field
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.gender) errs.gender = "Gender is required";
    if (!formData.phone.trim()) errs.phone = "Phone is required";
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) errs.phone = "Phone must be 10 digits";
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) errs.email = "Invalid email format";
    if (formData.amount && (isNaN(formData.amount) || parseFloat(formData.amount) < 0)) {
      errs.amount = "Amount must be a valid positive number";
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setValidationErrors(validationErrors);
    
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setSuccessMessage("");
    setErrors({});

    try {
      console.log("Submitting data:", formData);
      const response = await axios.post("http://localhost:5000/api/eventregister/eventuser", formData);
      
      setSuccessMessage("Event registration submitted successfully! You will receive a confirmation email shortly.");
      setFormData(initialState);
      
      // Optional: Redirect to payment gateway
      // window.location.href = `/payment?registrationId=${response.data.data.id}&amount=${formData.amount}`;
      
    } catch (err) {
      console.error('Submission error:', err);
      if (err.response?.status === 400) {
        setErrors(err.response.data);
        setValidationErrors(err.response.data);
      } else {
        setErrors({ general: err.response?.data?.message || "Failed to submit registration. Please try again." });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="shadow-lg border-0">
            <Card.Body className="p-5">
              <div className="text-center mb-4">
                <h2 className="fw-bold">Event Registration</h2>
                <p className="text-muted">Complete the form below to register for the event</p>
              </div>

              {successMessage && (
                <Alert variant="success" className="mb-4">
                  {successMessage}
                </Alert>
              )}

              {errors.general && (
                <Alert variant="danger" className="mb-4">
                  {errors.general}
                </Alert>
              )}

              <Form onSubmit={handleSubmit} noValidate>
                {/* Personal Information */}
                <h5 className="mb-3">Personal Information</h5>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label className="fw-semibold">Full Name <span className="text-danger">*</span></Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={validationErrors.name ? "is-invalid" : ""}
                      placeholder="Enter your full name"
                      required
                    />
                    {validationErrors.name && <div className="invalid-feedback">{validationErrors.name}</div>}
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Label className="fw-semibold">Gender <span className="text-danger">*</span></Form.Label>
                    <Form.Select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className={validationErrors.gender ? "is-invalid" : ""}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </Form.Select>
                    {validationErrors.gender && <div className="invalid-feedback">{validationErrors.gender}</div>}
                  </Col>
                </Row>

                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label className="fw-semibold">Phone <span className="text-danger">*</span></Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={validationErrors.phone ? "is-invalid" : ""}
                      placeholder="Enter 10-digit phone number"
                      required
                    />
                    {validationErrors.phone && <div className="invalid-feedback">{validationErrors.phone}</div>}
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Label className="fw-semibold">Email <span className="text-danger">*</span></Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={validationErrors.email ? "is-invalid" : ""}
                      placeholder="Enter your email address"
                      required
                    />
                    {validationErrors.email && <div className="invalid-feedback">{validationErrors.email}</div>}
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Address</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="address"
                    rows={2}
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your complete address"
                  />
                </Form.Group>

                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Label className="fw-semibold">City</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter city"
                    />
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Label className="fw-semibold">Pincode</Form.Label>
                    <Form.Control
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      placeholder="Enter pincode"
                      maxLength={6}
                    />
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Label className="fw-semibold">Country</Form.Label>
                    <Form.Control
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="Enter country"
                      defaultValue="India"
                    />
                  </Col>
                </Row>

                {/* Event Details */}
                <h5 className="mb-3 mt-4">Event Details</h5>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label className="fw-semibold">T-Shirt Size</Form.Label>
                    <Form.Select
                      name="tshirtSize"
                      value={formData.tshirtSize}
                      onChange={handleChange}
                    >
                      <option value="">Select Size</option>
                      {["S", "M", "L", "XL", "XXL", "XXXL"].map((size) => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Label className="fw-semibold">Registration Amount <span className="text-danger">*</span></Form.Label>
                    <Form.Control
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      className={validationErrors.amount ? "is-invalid" : ""}
                      placeholder=""
                      min="0"
                      required
                    />
                    {validationErrors.amount && <div className="invalid-feedback">{validationErrors.amount}</div>}
                  </Col>
                </Row>

                {/* Business Information */}
                <h5 className="mb-3 mt-4">Business Information</h5>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label className="fw-semibold">Company Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Enter company name"
                    />
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Label className="fw-semibold">Designation</Form.Label>
                    <Form.Control
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      placeholder="Enter your designation"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label className="fw-semibold">GST Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="gstNo"
                      value={formData.gstNo}
                      onChange={handleChange}
                      placeholder="Enter GST number (if applicable)"
                    />
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Label className="fw-semibold">Website</Form.Label>
                    <Form.Control
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://www.example.com"
                    />
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold">Business Category</Form.Label>
                  <Form.Control
                    type="text"
                    name="businessCategory"
                    value={formData.businessCategory}
                    onChange={handleChange}
                    placeholder="Enter business category/industry"
                  />
                </Form.Group>

                <div className="d-flex justify-content-center p-3 pb-0">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="fw-bold"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Processing...
                      </>
                    ) : (
                      "Proceed to Payment"
                    )}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Eventregistration;