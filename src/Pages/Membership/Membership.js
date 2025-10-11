import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Membership.css';

function Membership() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users from the backend API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/membershipproduct/membershipimguser?page=1&size=20');
        if (!res.ok) throw new Error('Failed to fetch users');
        const { data } = await res.json();
        // Sort by ID to ensure consistent order (assuming ID is numeric)
        const sortedData = data ? data.sort((a, b) => a.id - b.id) : [];
        setUsers(sortedData);
        setLoading(false);
      } catch (err) {
        console.error('Fetch error:', err);
        setError('Failed to load users');
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <div className="bk4 text-white d-flex justify-content-center align-items-center">
        <div>
          <h2 className="fw-bold">Membership</h2>
          <div className="d-flex gap-1 justify-content-center">
            <Link className="nav-link text-white" aria-current="page" to="/">
              Home
            </Link>
            <span>/</span>
            <p className="d-flex">Membership</p>
          </div>
        </div>
      </div>

      <section className="py-5 bg-white" id="masterclass">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <p className="fw-semibold mb-3 text-uppercase">
                <small>By experts, for you</small>
              </p>
              <h2 className="fw-bold">Real-World Lessons, Real Experts</h2>
            </div>
          </div>

          {loading && <p>Loading users...</p>}
          {error && <p className="text-danger">{error}</p>}

          <div className="row g-4">
            {users.slice(0, 3).map((user, index) => (
              <div className="col-md-6 col-lg-4" key={user.id}>
                <div className="card h-100 border-0 shadow-sm">
                  <a href={`https://www.youtube.com/watch?v=VIDEO_ID_${index + 1}`} target="_blank" className="video-link">
                    {user.dp && (
                      <img
                        src={`http://localhost:5000${user.dp}`}
                        className="card-img-top"
                        alt={user.name}
                        style={{ height: '280px', objectFit: 'cover' }}
                      />
                    )}
                  </a>
                  <div className="card-body text-center mb-0">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-subtitle text-muted mb-2">{user.category || 'Expert'}</p>
                    {/* <div className="d-flex justify-content-between mt-3">
                      <div className="p-2 ps-0 pe-0">
                        <span className="text-decoration-line-through text-secondary small">₹999</span>
                        <span className="text-decoration-none text-dark ms-2 fw-bold">₹499</span>
                      </div>
                      <div className="p-2 d-flex flex-shrink-1 gap-2">
                        <button type="button" className="btn btn-warning text-truncate">
                          <span className="text-decoration-none text-white">Add to cart</span>
                        </button>
                        <button type="button" className="btn btn-success text-truncate">
                          <span className="text-decoration-none text-white">
                            <i className="fas fa-shopping-cart me-2"></i>Buy now
                          </span>
                        </button>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row  text-center mb-5">
            <p className="fw-semibold mb-3 text-uppercase">
              <small>Pick what suits you best</small>
            </p>
            <h2 className="fw-bold">Choose Your Membership Plan</h2>
          </div>
          <div className="row gap-4 gap-lg-0">
            <div className="col-lg-4 d-flex">
              <div className="card border-0 shadow rounded-4 w-100 d-flex flex-column">
                <div className="card-body text-center d-flex flex-column">
                  <h5 className="card-title text-muted text-uppercase">Basic</h5>
                  <h6 className="card-price display-5">
                    ₹999<span className="fs-6">/year</span>
                  </h6>
                  <p className="text-decoration-line-through text-muted">₹1199/yr</p>
                  <hr className="my-4" />
                  <ul className="list-unstyled text-start px-4 flex-grow-1">
                    <li className="mb-3 d-flex">
                      <i className="fas fa-check text-success me-2"></i>Access member-only online community App
                    </li>
                    <li className="mb-3 d-flex">
                      <i className="fas fa-check text-success me-2"></i>Network online with 2000 entrepreneurs
                    </li>
                    <li className="mb-3 d-flex">
                      <i className="fas fa-check text-success me-2"></i>Meet potential Co-founders and collaborators
                    </li>
                    <li className="mb-3 d-flex">
                      <i className="fas fa-check text-success me-2"></i>Learn 0-1 journey from Startup Masterclass
                    </li>
                    <li className="mb-3 d-flex">
                      <i className="fas fa-check text-success me-2"></i>Access 50+ recorded sessions inside the App
                    </li>
                    <li className="mb-3 d-flex">
                      <i className="fas fa-check text-success me-2"></i>Get 50% off on all our Startup events
                    </li>
                    <li className="mb-3 d-flex">
                      <i className="fas fa-check text-success me-2"></i>Get Community feedback for your idea
                    </li>
                    <li className="mb-3 d-flex">
                      <i className="fas fa-check text-success me-2"></i>Know about all startup events in Tamil Nadu
                    </li>
                  </ul>
                  <div className="mt-auto">
                    <Link
                      to="/membershipregistration"
                      className="btn btn-primary-1 mt-2 mb-4 nav-link text-white text-uppercase btnnew"
                      aria-current="page"
                    >
                      Join Basic
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 d-flex">
              <div className="card border-0 shadow rounded-4 w-100 d-flex flex-column">
                <div className="card-body text-center d-flex flex-column">
                  <h5 className="card-title text-muted text-uppercase">Premium</h5>
                  <h6 className="card-price display-5">
                    ₹29,999<span className="fs-6">/year</span>
                  </h6>
                  <p className="text-decoration-line-through text-muted">₹31,999/yr</p>
                  <hr className="my-4" />
                  <ul className="list-unstyled text-start px-4 flex-grow-1">
                    <li className="mb-3 d-flex">
                      <i className="fas fa-check text-success me-2"></i>All benefits of Kai Kor
                    </li>
                    <li className="mb-3 d-flex">
                      <i className="fas fa-check text-success me-2"></i>Access our domain-based high power network
                    </li>
                    <li className="mb-3 d-flex">
                      <i className="fas fa-check text-success me-2"></i>Access to Founders-only WhatsApp group
                    </li>
                    <li className="mb-3 d-flex">
                      <i className="fas fa-check text-success me-2"></i>Add-on: AWS Activate credits worth $10,000
                    </li>
                    <li className="mb-3 d-flex">
                      <i className="fas fa-check text-success me-2"></i>Add-on: Zoho for Startups credits worth ₹1.86L
                    </li>
                    <li className="mb-3 d-flex">
                      <i className="fas fa-check text-success me-2"></i>Add-on: Google Cloud credits up to $100,000
                    </li>
                    <li className="mb-3 d-flex">
                      <i className="fas fa-check text-success me-2"></i>Access experienced & trusted service partners
                    </li>
                    <li className="mb-3 d-flex">
                      <i className="fas fa-check text-success me-2"></i>Get answers to your queries in &lt; 5 minutes
                    </li>
                  </ul>
                  <div className="mt-auto">
                    <Link
                      to="/membershipregistration"
                      className="btn btn-primary-1 mt-2 mb-4 nav-link text-white text-uppercase btnnew"
                      aria-current="page"
                    >
                      Join Premium
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 d-flex">
              <div className="card border-0 shadow rounded-4 w-100 d-flex flex-column">
                <div className="card-body text-center d-flex flex-column">
                  <h5 className="card-title text-muted text-uppercase">Elite</h5>
                  <h6 className="card-price display-5">
                    ₹39,999<span className="fs-6">/year</span>
                  </h6>
                  <p className="text-decoration-line-through text-muted">₹41,999/yr</p>
                  <hr className="my-4" />
                  <ul className="list-unstyled text-start px-4 flex-grow-1">
                    <li className="mb-3 d-flex">
                      <i className="fas fa-check text-success me-2"></i>Includes all Premium benefits
                    </li>
                    <li className="mb-3 d-flex">
                      <i className="fas fa-check text-success me-2"></i>1-on-1 Mentorship sessions with top founders
                    </li>
                    <li className="mb-3 d-flex">
                      <i className="fas fa-check text-success me-2"></i>Spotlight features in our newsletters/events
                    </li>
                    <li className="mb-3 d-flex">
                      <i className="fas fa-check text-success me-2"></i>Priority support & private consultations
                    </li>
                    <li className="mb-3 d-flex">
                      <i className="fas fa-check text-success me-2"></i>Free access to all paid startup events
                    </li>
                    <li className="mb-3 d-flex">
                      <i className="fas fa-check text-success me-2"></i>Custom founder resources on demand
                    </li>
                    <li className="mb-3 d-flex">
                      <i className="fas fa-check text-success me-2"></i>Exclusive networking dinners & retreats
                    </li>
                    <li className="mb-3 d-flex">
                      <i className="fas fa-check text-success me-2"></i>Dedicated Account Manager
                    </li>
                  </ul>
                  <div className="mt-auto">
                    <Link
                      to="/membershipregistration"
                      className="btn btn-primary-1 mt-2 mb-4 nav-link text-white text-uppercase btnnew"
                      aria-current="page"
                    >
                      Join Elite
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid bg-body-tertiary pb-4">
        <div className="container pt-5 mb-5">
          <div>
            <h2 className="display-5 fw-bold mb-5 text-center text-dark">What we do</h2>
          </div>
          <div className="row gap-4 gap-md-0 gy-4 pt-4">
            <div className="col-md-12 col-lg-4">
              <div className="card h-100">
                <div className="card-header bg-transparent text-center mt-3 border-0">
                  <i className="fas fa-microphone feature-icon mb-3 mt-3 fs-2 fw-semibold"></i>
                  <h5 className="fw-semibold">Networking with 1000+ Participants</h5>
                </div>
                <div className="card-body mb-4">
                  <p className="card-text text-black-50">
                    Connect with founders, investors, mentors, and leaders from across the ecosystem to build meaningful collaborations and partnerships.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="card h-100">
                <div className="card-header bg-transparent text-center mt-3 border-0">
                  <i className="fas fa-users feature-icon mb-3 mt-3 fs-2 fw-semibold"></i>
                  <h5 className="fw-semibold">Learning from Experts</h5>
                </div>
                <div className="card-body">
                  <p className="card-text text-black-50">
                    Gain insights from industry pioneers through keynotes, panels, and fireside chats on scaling, challenges, and global opportunities.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="card h-100">
                <div className="card-header bg-transparent text-center mt-3 border-0">
                  <i className="fas fa-gift feature-icon mb-3 mt-3 fs-2 fw-semibold"></i>
                  <h5 className="fw-semibold">Funding Opportunities</h5>
                </div>
                <div className="card-body">
                  <p className="card-text text-black-50">
                    Pitch to 30+ VCs and angel investors, secure mentorship, and explore strategic support to scale your venture.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="card h-100">
                <div className="card-header bg-transparent text-center mt-3 border-0">
                  <i className="fas fa-microphone feature-icon mb-3 mt-3 fs-2 fw-semibold"></i>
                  <h5 className="fw-semibold">Demo Day</h5>
                </div>
                <div className="card-body mb-4">
                  <p className="card-text text-black-50">
                    Showcase your innovations to investors and industry leaders, unlocking funding, partnerships, and media visibility.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="card h-100">
                <div className="card-header bg-transparent text-center mt-3 border-0">
                  <i className="fas fa-users feature-icon mb-3 mt-3 fs-2 fw-semibold"></i>
                  <h5 className="fw-semibold">Workshops & Knowledge Sessions</h5>
                </div>
                <div className="card-body">
                  <p className="card-text text-black-50">
                    Hands-on sessions on AI, scaling revenue, work culture, and global markets, offering actionable tools for success.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="card h-100">
                <div className="card-header bg-transparent text-center mt-3 border-0">
                  <i className="fas fa-gift feature-icon mb-3 mt-3 fs-2 fw-semibold"></i>
                  <h5 className="fw-semibold">Exclusive Gala & Dinner</h5>
                </div>
                <div className="card-body">
                  <p className="card-text text-black-50">
                    An intimate premium dinner with top leaders, fostering deeper conversations and lasting elite connections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>

      <section className="py-5" id="faq">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8 col-xl-7">
              <span className="text-muted">F.A.Q</span>
              <h2 className="display-5 fw-bold">Frequently Asked Questions</h2>
              <p className="lead">Here are answers to the most common questions we receive from our members and community.</p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-5 mb-4">
              <span className="text-muted">Need Help?</span>
              <h2 className="pb-4 fw-bold">Have Any Questions?</h2>
              <p>Still have doubts about Kai Kor Club? Reach out to us directly and we’ll help you get started.</p>
            </div>

            <div className="col-md-7">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faqHeadingOne">
                    <button
                      className="accordion-button collapsed bg-light"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqCollapseOne"
                      aria-expanded="false"
                      aria-controls="faqCollapseOne"
                    >
                      <div className="text-muted me-3">
                        <i className="bi bi-question-circle-fill"></i>
                      </div>
                      What if I want to cancel my membership?
                    </button>
                  </h2>
                  <div
                    id="faqCollapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="faqHeadingOne"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      If you are disappointed with our product, you can always write to us at{' '}
                      <a href="mailto:hello@KaiKor.in">hello@KaiKor.in</a>.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="faqHeadingTwo">
                    <button
                      className="accordion-button collapsed bg-light"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqCollapseTwo"
                      aria-expanded="false"
                      aria-controls="faqCollapseTwo"
                    >
                      <div className="text-muted me-3">
                        <i className="bi bi-question-circle-fill"></i>
                      </div>
                      Is my membership transferable?
                    </button>
                  </h2>
                  <div
                    id="faqCollapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="faqHeadingTwo"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      No, Kai Kor Club membership is for individual use only. Sharing or multi-device access may lead to account suspension.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="faqHeadingThree">
                    <button
                      className="accordion-button collapsed bg-light"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqCollapseThree"
                      aria-expanded="false"
                      aria-controls="faqCollapseThree"
                    >
                      <div className="text-muted me-3">
                        <i className="bi bi-question-circle-fill"></i>
                      </div>
                      How long is the membership valid?
                    </button>
                  </h2>
                  <div
                    id="faqCollapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="faqHeadingThree"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">Each membership plan is valid for one full year from the date of joining.</div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="faqHeadingFour">
                    <button
                      className="accordion-button collapsed bg-light"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqCollapseFour"
                      aria-expanded="false"
                      aria-controls="faqCollapseFour"
                    >
                      <div className="text-muted me-3">
                        <i className="bi bi-question-circle-fill"></i>
                      </div>
                      What is included in the ₹999 Club membership?
                    </button>
                  </h2>
                  <div
                    id="faqCollapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="faqHeadingFour"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Access to Kai Kor Community App, 50+ recorded sessions, networking with 2000+ entrepreneurs, 50% off events, and more.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="faqHeadingFive">
                    <button
                      className="accordion-button collapsed bg-light"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqCollapseFive"
                      aria-expanded="false"
                      aria-controls="faqCollapseFive"
                    >
                      <div className="text-muted me-3">
                        <i className="bi bi-question-circle-fill"></i>
                      </div>
                      Are there any discounts for students?
                    </button>
                  </h2>
                  <div
                    id="faqCollapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="faqHeadingFive"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Currently, we don’t offer fixed discounts for students. But if you're working on something serious, email us with details — we might consider a coupon.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="faqHeadingSix">
                    <button
                      className="accordion-button collapsed bg-light"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqCollapseSix"
                      aria-expanded="false"
                      aria-controls="faqCollapseSix"
                    >
                      <div className="text-muted me-3">
                        <i className="bi bi-question-circle-fill"></i>
                      </div>
                      I paid for membership but can’t login. What should I do?
                    </button>
                  </h2>
                  <div
                    id="faqCollapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="faqHeadingSix"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Search your inbox for an invite from <strong>KaiKor@mn.co</strong> (check spam too). If you still can’t access, WhatsApp us at +91 9361144314 or email{' '}
                      <a href="mailto:team@KaiKor.in">team@KaiKor.in</a>.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Membership;