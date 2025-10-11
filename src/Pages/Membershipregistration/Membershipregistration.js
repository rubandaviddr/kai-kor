import React, { useState } from "react";
import { Container, Row, Col, Button, Form, ProgressBar } from "react-bootstrap";
import axios from "axios";


const steps = [
  { id: 1, title: "Contact Details", component: Step1, icon: "fas fa-user" },
  { id: 2, title: "Startup Details", component: Step2, icon: "fas fa-building" },
  { id: 3, title: "Journey & Vision", component: Step3, icon: "fas fa-road" },
  { id: 4, title: "Membership & Referral", component: Step4, icon: "fas fa-users" },
  { id: 5, title: "What's Next", component: Step5, icon: "fas fa-forward" },
];

function Membershipregistration() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    startupName: "",
    startupStage: "",
    industry: "",
    journey: "",
    vision: "",
    whyJoin: "",
    referral: "",
    nextPlans: "",
  });
  const [errors, setErrors] = useState({});

  const StepComponent = steps.find((s) => s.id === currentStep).component;

  const validateStep = () => {
    const errs = {};
    if (currentStep === 1) {
      if (!formData.name) errs.name = "Full Name is required";
      if (!formData.email) errs.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Invalid email format";
      if (!formData.phone) errs.phone = "Phone is required";
      else if (!/^\d{10}$/.test(formData.phone)) errs.phone = "Phone must be 10 digits";
      if (!formData.city) errs.city = "City is required";
    } else if (currentStep === 2) {
      if (!formData.startupName) errs.startupName = "Startup Name is required";
      if (!formData.startupStage) errs.startupStage = "Startup Stage is required";
      else if (!["idea", "early", "growth", "scale"].includes(formData.startupStage))
        errs.startupStage = "Invalid Startup Stage";
      if (!formData.industry) errs.industry = "Industry is required";
    } else if (currentStep === 3) {
      if (!formData.journey) errs.journey = "Startup Journey is required";
      if (!formData.vision) errs.vision = "Vision is required";
    } else if (currentStep === 4) {
      if (!formData.whyJoin) errs.whyJoin = "Reason for joining is required";
    } else if (currentStep === 5) {
      if (!formData.nextPlans) errs.nextPlans = "Next Plans are required";
    }
    return errs;
  };

  const goNext = () => {
    const v = validateStep();
    if (Object.keys(v).length > 0) {
      setErrors(v);
      return;
    }
    if (currentStep < steps.length) {
      setErrors({});
      setCurrentStep(currentStep + 1);
    }
  };

  const goBack = () => {
    if (currentStep > 1) {
      setErrors({});
      setCurrentStep(currentStep - 1);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validateStep();
    if (Object.keys(v).length > 0) {
      setErrors(v);
      return;
    }
    try {
      console.log("Submitting form data:", formData); // Log payload for debugging
      await axios.post("http://localhost:5000/api/membershipregister/membershipuser", formData);
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        startupName: "",
        startupStage: "",
        industry: "",
        journey: "",
        vision: "",
        whyJoin: "",
        referral: "",
        nextPlans: "",
      });
      setCurrentStep(1);
    } catch (err) {
      console.error("Submission error:", err);
      const errorMessage = err.response?.data?.error || err.message;
      console.log("Server response:", err.response?.data); // Log server error details
      alert(`Submission failed: ${errorMessage}`);
    }
  };

  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} className="bg-white p-4 rounded shadow-sm">
          <h2 className="mb-5 text-center">Membership Pre-Registration</h2>

          {/* Step Indicators */}
          <div className="d-flex justify-content-between mb-4 position-relative flex-column flex-md-row gap-4 gap-xl-0">
            {steps.map((step) => (
              <div key={step.id} className="text-center flex-fill">
                <div
                  className={`d-inline-block w-8 h-8 rounded-circle p-3 pt-2 pb-2 text-white mb-2 ${
                    currentStep >= step.id ? "bg-primary" : "bg-light text-dark"
                  }`}
                  style={{ lineHeight: "2rem" }}
                >
                  <i className={step.icon}></i>
                </div>
                <div className={currentStep >= step.id ? "text-primary" : "text-muted"}>{step.title}</div>
              </div>
            ))}
            <div
              className="position-absolute top-50 start-0 end-0 bg-light"
              style={{ height: "2px", transform: "translateY(-50%)", zIndex: -1 }}
            />
          </div>

          {/* Progress Bar */}
          <ProgressBar
            now={progress}
            label={`${Math.round(progress)}%`}
            className="mb-4 rounded"
            style={{ height: "14px" }}
          />

          {/* Form */}
          <Form onSubmit={handleSubmit} noValidate>
            <StepComponent data={formData} onChange={handleChange} errors={errors} />

            {/* Navigation Buttons */}
            <div className="d-flex justify-content-between mt-4">
              {currentStep > 1 && (
                <Button variant="outline-secondary" onClick={goBack} className="d-flex align-items-center">
                  <i className="fas fa-arrow-left me-2"></i> Previous
                </Button>
              )}
              {currentStep < steps.length && (
                <Button variant="primary" onClick={goNext} className="d-flex align-items-center">
                  Next <i className="fas fa-arrow-right ms-2"></i>
                </Button>
              )}
              {currentStep === steps.length && (
                <Button variant="success" type="submit" className="d-flex align-items-center">
                  Finish <i className="fas fa-check ms-2"></i>
                </Button>
              )}
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

function Step1({ data, onChange, errors }) {
  return (
    <>
      <Form.Group className="mb-4 pt-4" controlId="name">
        <Form.Label>
          <i className="fas fa-user me-2"></i>Full Name *
        </Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={data.name}
          onChange={onChange}
          required
          className={`rounded ${errors.name ? "is-invalid" : ""}`}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </Form.Group>
      <Form.Group className="mb-4" controlId="email">
        <Form.Label>
          <i className="fas fa-envelope me-2"></i>Email *
        </Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={data.email}
          onChange={onChange}
          required
          className={`rounded ${errors.email ? "is-invalid" : ""}`}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </Form.Group>
      <Form.Group className="mb-4" controlId="phone">
        <Form.Label>
          <i className="fas fa-phone me-2"></i>Phone *
        </Form.Label>
        <Form.Control
          type="tel"
          name="phone"
          value={data.phone}
          onChange={onChange}
          required
          className={`rounded ${errors.phone ? "is-invalid" : ""}`}
        />
        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
      </Form.Group>
      <Form.Group className="mb-4" controlId="city">
        <Form.Label>
          <i className="fas fa-city me-2"></i>City *
        </Form.Label>
        <Form.Control
          type="text"
          name="city"
          value={data.city}
          onChange={onChange}
          required
          className={`rounded ${errors.city ? "is-invalid" : ""}`}
        />
        {errors.city && <div className="invalid-feedback">{errors.city}</div>}
      </Form.Group>
    </>
  );
}

function Step2({ data, onChange, errors }) {
  return (
    <>
      <Form.Group className="mb-4" controlId="startupName">
        <Form.Label>
          <i className="fas fa-briefcase me-2"></i>Startup Name *
        </Form.Label>
        <Form.Control
          type="text"
          name="startupName"
          value={data.startupName}
          onChange={onChange}
          required
          className={`rounded ${errors.startupName ? "is-invalid" : ""}`}
        />
        {errors.startupName && <div className="invalid-feedback">{errors.startupName}</div>}
      </Form.Group>
      <Form.Group className="mb-4" controlId="startupStage">
        <Form.Label>
          <i className="fas fa-chart-line me-2"></i>Startup Stage *
        </Form.Label>
        <Form.Select
          name="startupStage"
          value={data.startupStage}
          onChange={onChange}
          required
          className={`rounded ${errors.startupStage ? "is-invalid" : ""}`}
        >
          <option value="">Select</option>
          <option value="idea">Idea Stage</option>
          <option value="early">Early Stage</option>
          <option value="growth">Growth Stage</option>
          <option value="scale">Scaling</option>
        </Form.Select>
        {errors.startupStage && <div className="invalid-feedback">{errors.startupStage}</div>}
      </Form.Group>
      <Form.Group className="mb-4" controlId="industry">
        <Form.Label>
          <i className="fas fa-industry me-2"></i>Industry *
        </Form.Label>
        <Form.Control
          type="text"
          name="industry"
          value={data.industry}
          onChange={onChange}
          required
          className={`rounded ${errors.industry ? "is-invalid" : ""}`}
        />
        {errors.industry && <div className="invalid-feedback">{errors.industry}</div>}
      </Form.Group>
    </>
  );
}

function Step3({ data, onChange, errors }) {
  return (
    <>
      <Form.Group className="mb-4" controlId="journey">
        <Form.Label>
          <i className="fas fa-book me-2"></i>Your Startup Journey *
        </Form.Label>
        <Form.Control
          as="textarea"
          name="journey"
          value={data.journey}
          onChange={onChange}
          rows={3}
          required
          className={`rounded ${errors.journey ? "is-invalid" : ""}`}
        />
        {errors.journey && <div className="invalid-feedback">{errors.journey}</div>}
      </Form.Group>
      <Form.Group className="mb-4" controlId="vision">
        <Form.Label>
          <i className="fas fa-binoculars me-2"></i>Vision for the Future *
        </Form.Label>
        <Form.Control
          as="textarea"
          name="vision"
          value={data.vision}
          onChange={onChange}
          rows={3}
          required
          className={`rounded ${errors.vision ? "is-invalid" : ""}`}
        />
        {errors.vision && <div className="invalid-feedback">{errors.vision}</div>}
      </Form.Group>
    </>
  );
}

function Step4({ data, onChange, errors }) {
  return (
    <>
      <Form.Group className="mb-4" controlId="whyJoin">
        <Form.Label>
          <i className="fas fa-question-circle me-2"></i>Why do you want to join? *
        </Form.Label>
        <Form.Control
          as="textarea"
          name="whyJoin"
          value={data.whyJoin}
          onChange={onChange}
          rows={2}
          required
          className={`rounded ${errors.whyJoin ? "is-invalid" : ""}`}
        />
        {errors.whyJoin && <div className="invalid-feedback">{errors.whyJoin}</div>}
      </Form.Group>
      <Form.Group className="mb-4" controlId="referral">
        <Form.Label>
          <i className="fas fa-user-friends me-2"></i>Referral (if any)
        </Form.Label>
        <Form.Control
          type="text"
          name="referral"
          value={data.referral}
          onChange={onChange}
          className="rounded"
        />
      </Form.Group>
    </>
  );
}

function Step5({ data, onChange, errors }) {
  return (
    <>
      <Form.Group className="mb-4" controlId="nextPlans">
        <Form.Label>
          <i className="fas fa-list-ul me-2"></i>Next Plans *
        </Form.Label>
        <Form.Control
          as="textarea"
          name="nextPlans"
          value={data.nextPlans}
          onChange={onChange}
          rows={3}
          required
          className={`rounded ${errors.nextPlans ? "is-invalid" : ""}`}
        />
        {errors.nextPlans && <div className="invalid-feedback">{errors.nextPlans}</div>}
      </Form.Group>
    </>
  );
}

export default Membershipregistration;