import React from "react";
import "./Home.css";
import { FiFacebook, FiInstagram, FiTwitter, FiCalendar } from "react-icons/fi";
import { BsClipboard } from "react-icons/bs";
import { Link } from "react-router-dom";


function Home() {
  return (
    <>
      <div>
        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={require("../Img/banner.webp")}
                className="d-block w-100 img-fluid object-fit-cover"
                alt="me"
                style={{ height: "650px" }}
              />
              <div class="carousel-caption d-none d-md-block">
                <small class="fw-bold">28.06.2026 FORUM 10:30AM</small>
                <h2 class="display-3 fw-bold">
                  Big dreams start small — we help you grow.
                </h2>
                <Link to="/eventregistration" className="btn btn-primary-1 p-3 ps-5 pe-5 mt-3 nav-link text-white" aria-current="page" >
                  Register now
                </Link>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={require("../Img/banner2.webp")}
                className="d-block w-100 img-fluid object-fit-cover"
                alt="me"
                style={{ height: "650px" }}
              />
              <div class="carousel-caption d-none d-md-block">
                <small class="fw-bold">28.06.2026 FORUM 10:30AM</small>
                <h2 class="display-3 fw-bold">
                  Fueling innovation, fostering collaboration, shaping tomorrow.{" "}
                </h2>
                <Link to="/eventregistration" className="btn btn-primary-1 p-3 ps-5 pe-5 mt-3 nav-link text-white" aria-current="page" >
                  Register now
                </Link>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={require("../Img/banner4.webp")}
                className="d-block w-100 img-fluid object-fit-cover"
                alt="me"
                style={{ height: "650px" }}
              />
              <div class="carousel-caption d-none d-md-block">
                <small class="fw-bold">28.06.2026 FORUM 10:30AM</small>
                <h2 class="display-3 fw-bold">
                  Turning visions into ventures.Where entrepreneurs rise,
                  connect, and create impact.
                </h2>
                <Link to="/eventregistration" className="btn btn-primary-1 p-3 ps-5 pe-5 mt-3 nav-link text-white" aria-current="page" >
                  Register now
                </Link>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div class="bk pt-5 pb-5">
        <div class="container mb-5 mt-5 pt-5 pb-5">
          <div class="d-flex flex-column flex-lg-row mb-5 pt-5">
            <div class="w-50">
              <small class="fw-semibold">Everything we offer</small>
              <h3 class="display-4 fw-bold d-flex">Our Services</h3>
            </div>
            <div class="text-body-tertiary mt-5 flex-shrink-1 ps-md-0 ps-lg-4">
              kai kor brings together entrepreneurs, investors, and industry
              leaders for networking, learning, and growth. Participants gain
              expert insights, hands-on workshops, and funding opportunities to
              scale their ventures.
            </div>
            <div class="carousel-controls  text-end mt-5" style={{ width: "15%" }}>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
                class="rounded-5 btn btn-light"
              >
                <span>→</span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
                class="rounded-5 btn btn-light"
              >
                <span>←</span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div id="carouselExampleIndicators" class="carousel slide pt-2">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row gap-4 gap-md-4 gap-lg-0">
                  <div class="col-md-12 col-lg-4">
                    <div class="card h-100">
                      <div class="card-body p-4 mt-3 mb-3">
                        <h5 class="card-title">Networking power</h5>
                        <p class="card-text">
                          Connect with 1000+ entrepreneurs, investors, and
                          leaders to build collaborations and long-term business
                          relationships.
                        </p>
                        <Link to="/membership" className="btn btn-primary-1 mt-3 nav-link text-white" aria-current="page" > Learn More </Link>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 col-lg-4">
                    <div class="card h-100">
                      <div class="card-body p-4 mt-3 mb-3">
                        <h5 class="card-title">Expert Insights</h5>
                        <p class="card-text">
                          Gain practical knowledge from industry pioneers
                          through keynotes, panels, and hands-on workshops on
                          growth and innovation.
                        </p>
                        <Link to="/membership" className="btn btn-primary-1 mt-3 nav-link text-white" aria-current="page" > Learn More </Link>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 col-lg-4">
                    <div class="card h-100">
                      <div class="card-body p-4 mt-3 mb-3">
                        <h5 class="card-title">Growth & Funding</h5>
                        <p class="card-text">
                          Pitch to 30+ venture capital firms and showcase
                          innovations on Demo Day to secure funding, mentorship,
                          and partnerships.
                        </p>
                        <Link to="/membership" className="btn btn-primary-1 mt-3 nav-link text-white" aria-current="page" > Learn More </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col-md-12 col-lg-4">
                    <div class="card h-100">
                      <div class="card-body p-4 mt-3 mb-3">
                        <h5 class="card-title">Elite Access</h5>
                        <p class="card-text">
                          Engage in exclusive gala dinners and high-value
                          interactions with top leaders, fostering deeper bonds
                          and elite access.
                        </p>
                        <Link to="/membership" className="btn btn-primary-1 mt-3 nav-link text-white" aria-current="page" > Learn More </Link>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 col-lg-4">
                    <div class="card h-100">
                      <div class="card-body p-4 mt-3 mb-3">
                        <h5 class="card-title">Workshops</h5>
                        <p class="card-text">
                          Hands-on sessions on AI, revenue growth, work culture,
                          and global markets, giving actionable strategies for
                          success.
                        </p>
                        <Link to="/membership" className="btn btn-primary-1 mt-3 nav-link text-white" aria-current="page" > Learn More </Link>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 col-lg-4">
                    <div class="card h-100">
                      <div class="card-body p-4 mt-3 mb-3">
                        <h5 class="card-title">Networking</h5>
                        <p class="card-text">
                          Premium dinner for high-quality interactions, deeper
                          conversations, and lasting elite connections.
                        </p>
                        <Link to="/membership" className="btn btn-primary-1 mt-3 nav-link text-white" aria-current="page" > Learn More </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="container  mt-5 pt-5 pb-5 mb-5">
          <div class="row pt-5 mt-5">
            <div class="col-md-12 col-lg-6">
              <img
                src={require("../Img/whatwe_do.png")}
                className="d-block w-100 img-fluid object-fit-cover"
                alt="me"
              />
            </div>
            <div class="col-md-12 col-lg-6 d-md-flex align-items-md-center ">
              <div class="ps-md-0 ps-lg-5 mt-4 mt-md-4">
                <p class="fw-semibold mb-3 text-uppercase">
                  <small>what we do</small>
                </p>
                <h2 class="display-5 fw-bold mb-4">Introducing organization</h2>
                <p class="text-body-tertiary">
                  Kaikor brings together a vibrant community of learners,
                  professionals, and entrepreneurs to connect, collaborate, and
                  grow. While many platforms focus only on networking or
                  courses, Kaikor creates meaningful interactions that combine
                  mentorship, peer learning, and real opportunities. Our
                  ecosystem is built to support members at every stage – from
                  students exploring skills to founders building startups – by
                  giving them access to mentors, projects, and collaborations.
                  Kaikor acts as a bridge between ambition and opportunity,
                  ensuring that no journey is taken alone.
                </p>

                <Link
                  to="/about"
                  className="btn btn-primary-1 mt-3 nav-link text-white"
                  aria-current="page"
                >
                  Learn More
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="container ">
          <div class="d-flex flex-column flex-md-row justify-content-between">
            <div>
              <p class="fw-semibold mb-1 text-uppercase">
                <small>calendar</small>
              </p>
              <h2 class="display-5 fw-bold mb-4">Event schedule</h2>
            </div>
            <div class="fw-bold fs-6">More Events →</div>
          </div>
          <ul class="nav nav-pills mb-4" id="pills-tab" role="tablist">
            <li class="nav-item pb-0" role="presentation">
              <button class="nav-link active ps-md-0 fw-bold" id="pills-day1-tab" data-bs-toggle="pill" data-bs-target="#pills-day1" type="button" role="tab" aria-controls="pills-day1" aria-selected="true">
                Day #1 – Sept 19, 2026
              </button>
            </li>
            <li class="nav-item pb-0" role="presentation">
              <button class="nav-link fw-bold" id="pills-day2-tab" data-bs-toggle="pill" data-bs-target="#pills-day2" type="button" role="tab" aria-controls="pills-day2" aria-selected="false">
                Day #2 – Sept 20, 2026
              </button>
            </li>
            <li class="nav-item pb-0" role="presentation">
              <button class="nav-link fw-bold" id="pills-day3-tab" data-bs-toggle="pill" data-bs-target="#pills-day3" type="button" role="tab" aria-controls="pills-day3" aria-selected="false">
                Day #3 – Sept 21, 2026
              </button>
            </li>
          </ul>

          <div class="tab-content" id="pills-tabContent">

            <div class="tab-pane fade show active" id="pills-day1" role="tabpanel" aria-labelledby="pills-day1-tab" tabindex="0">
              <div class="table-responsive">
              <table class="table mt-3 eventstable">
                <tbody>
                  <tr>
                    <td class="fw-bold h7 ps-0">10:00 – 12:00 am</td>
                    <td class="fw-bold h7">Founders’ Fireside Chat</td>
                    <td class="fw-bold h7">Anika Rao <br /><span class="text-body-tertiary">Speaker</span></td>
                    <td class="fw-bold h7">Chennai <br /><span class="text-body-tertiary">Kaikor Hub</span></td>
                    <td>
                      <Link to="/eventregistration" className="btn btn-primary-1 mt-3 nav-link text-white text-uppercase" aria-current="page" >Register</Link>
                    </td>
                  </tr>
                  <tr>
                    <td class="fw-bold h7 ps-0">12:00 – 2:00 pm</td>
                    <td class="fw-bold h7">Peer Learning Workshop</td>
                    <td class="fw-bold h7">Anika Rao <br /><span class="text-body-tertiary">Mentor</span></td>
                    <td class="fw-bold h7">Chennai <br /><span class="text-body-tertiary">Kaikor Hub</span></td>
                    <td><Link to="/eventregistration" className="btn btn-primary-1 mt-3 nav-link text-white text-uppercase" aria-current="page" >Register</Link></td>
                  </tr>
                  <tr>
                    <td class="fw-bold h7 ps-0">3:00 – 5:00 pm</td>
                    <td class="fw-bold h7">Innovation in Startups</td>
                    <td class="fw-bold h7">Meera Subramanian <br /><span class="text-body-tertiary">Speaker</span></td>
                    <td class="fw-bold h7">Chennai <br /><span class="text-body-tertiary">Kaikor Hub</span></td>
                    <td><Link to="/eventregistration" className="btn btn-primary-1 mt-3 nav-link text-white text-uppercase" aria-current="page" >Register</Link></td>
                  </tr>

                  <tr>
                    <td class="fw-bold h7 ps-0">5:30 – 6:30 pm</td>
                    <td class="fw-bold h7">Startup Success Stories</td>
                    <td class="fw-bold h7">Meera Subramanian <br /><span class="text-body-tertiary">Founder</span></td>
                    <td class="fw-bold h7">Chennai <br /><span class="text-body-tertiary">Kaikor Hub</span></td>
                    <td><Link to="/eventregistration" className="btn btn-primary-1 mt-3 nav-link text-white text-uppercase" aria-current="page" >Register</Link></td>
                  </tr>
                  <tr>
                    <td class="fw-bold h7 ps-0">6:30 – 7:30 pm</td>
                    <td class="fw-bold h7">Entrepreneurial Mindset Workshop</td>
                    <td class="fw-bold h7">Meera Subramanian <br /><span class="text-body-tertiary">Mentor</span></td>
                    <td class="fw-bold h7">Chennai <br /><span class="text-body-tertiary">Kaikor Hub</span></td>
                    <td><Link to="/eventregistration" className="btn btn-primary-1 mt-3 nav-link text-white text-uppercase" aria-current="page" >Register</Link></td>
                  </tr>
                  <tr>
                    <td class="fw-bold h7 ps-0">7:30 – 8:30 pm</td>
                    <td class="fw-bold h7">Networking & Collaboration Hour</td>
                    <td class="fw-bold h7">Meera Subramanian<br /><span class="text-body-tertiary">Community</span></td>
                    <td class="fw-bold h7">Chennai <br /><span class="text-body-tertiary">Kaikor Hub</span></td>
                    <td><Link to="/eventregistration" className="btn btn-primary-1 mt-3 nav-link text-white text-uppercase" aria-current="page" >Register</Link></td>
                  </tr>
                  <tr>
                    <td class="fw-bold h7 ps-0">8:30 – 9:30 pm</td>
                    <td class="fw-bold h7">Investor Insights Panel</td>
                    <td class="fw-bold h7">Priya Natarajan <br /><span class="text-body-tertiary">Investor</span></td>
                    <td class="fw-bold h7">Chennai <br /><span class="text-body-tertiary">Kaikor Hub</span></td>
                    <td><Link to="/eventregistration" className="btn btn-primary-1 mt-3 nav-link text-white text-uppercase" aria-current="page" >Register</Link></td>
                  </tr>


                </tbody>
              </table></div>
            </div>

            <div class="tab-pane fade" id="pills-day2" role="tabpanel" aria-labelledby="pills-day2-tab" tabindex="0">
              <div class="table-responsive">
              <table class="table mt-3 eventstable">
                <tbody>
                  <tr>
                    <td class="fw-bold h7 ps-0">10:00 – 12:00 am</td>
                    <td class="fw-bold h7">AI & Entrepreneurship Workshop</td>
                    <td class="fw-bold h7">Sanjay Iyer <br /><span class="text-body-tertiary">Mentor</span></td>
                    <td class="fw-bold h7">Chennai <br /><span class="text-body-tertiary">Kaikor Hub</span></td>
                    <td><Link to="/eventregistration" className="btn btn-primary-1 mt-3 nav-link text-white text-uppercase" aria-current="page" >Register</Link></td>
                  </tr>
                  <tr>
                    <td class="fw-bold h7 ps-0">12:30 – 2:30 pm</td>
                    <td class="fw-bold h7">Funding & Pitch Clinic</td>
                    <td class="fw-bold h7">Vikram Das <br /><span class="text-body-tertiary">Investor</span></td>
                    <td class="fw-bold h7">Chennai <br /><span class="text-body-tertiary">Kaikor Hub</span></td>
                    <td><Link to="/eventregistration" className="btn btn-primary-1 mt-3 nav-link text-white text-uppercase" aria-current="page" >Register</Link></td>
                  </tr>
                  <tr>
                    <td class="fw-bold h7 ps-0">3:00 – 5:00 pm</td>
                    <td class="fw-bold h7">Collaborative Projects Forum</td>
                    <td class="fw-bold h7">Ananya Krishnan <br /><span class="text-body-tertiary">Speaker</span></td>
                    <td class="fw-bold h7">Chennai <br /><span class="text-body-tertiary">Kaikor Hub</span></td>
                    <td><Link to="/eventregistration" className="btn btn-primary-1 mt-3 nav-link text-white text-uppercase" aria-current="page" >Register</Link></td>
                  </tr>
                </tbody>
              </table></div>
            </div>

            <div class="tab-pane fade" id="pills-day3" role="tabpanel" aria-labelledby="pills-day3-tab" tabindex="0">
              <div class="table-responsive">
              <table class="table mt-3 eventstable">
                <tbody>
                  <tr>
                    <td class="fw-bold h7 ps-0">10:00 – 12:00 am</td>
                    <td class="fw-bold h7">Demo Day & Showcase</td>
                    <td class="fw-bold h7">Multiple Speakers <br /><span class="text-body-tertiary">Entrepreneurs</span></td>
                    <td class="fw-bold h7">Chennai <br /><span class="text-body-tertiary">Kaikor Hub</span></td>
                    <td><Link to="/eventregistration" className="btn btn-primary-1 mt-3 nav-link text-white text-uppercase" aria-current="page" >Register</Link></td>
                  </tr>
                  <tr>
                    <td class="fw-bold h7 ps-0">12:30 – 2:30 pm</td>
                    <td class="fw-bold h7">Mentorship Roundtables</td>
                    <td class="fw-bold h7">Senior Mentors <br /><span class="text-body-tertiary">Guidance</span></td>
                    <td class="fw-bold h7">Chennai <br /><span class="text-body-tertiary">Kaikor Hub</span></td>
                    <td><Link to="/eventregistration" className="btn btn-primary-1 mt-3 nav-link text-white text-uppercase" aria-current="page" >Register</Link></td>
                  </tr>
                  <tr>
                    <td class="fw-bold h7 ps-0">3:00 – 5:00 pm</td>
                    <td class="fw-bold h7">Closing Networking Gala</td>
                    <td class="fw-bold h7">All Participants <br /><span class="text-body-tertiary">Community</span></td>
                    <td class="fw-bold h7">Chennai <br /><span class="text-body-tertiary">Kaikor Hub</span></td>
                    <td><Link to="/eventregistration" className="btn btn-primary-1 mt-3 nav-link text-white text-uppercase" aria-current="page" >Register</Link></td>
                  </tr>
                </tbody>
              </table></div>
            </div>

          </div>

        </div>
      </div>

      <div class="bk2 pt-5 pb-5">
        <div class="container mb-5 mt-5 pt-5 pb-5">
          <div class="d-flex justify-content-between flex-column flex-lg-row mb-5 pt-5">
            <div class="w-75">
              <small class="fw-semibold text-white">Top projects</small>
              <h3 class="display-4 fw-bold d-flex text-white">Latest events</h3>
            </div>
            <div class="mt-5 text-white">
              Kaikor’s latest event brings together a vibrant community of
              learners, entrepreneurs, mentors, and investors for three days of
              immersive experiences.
            </div>
            <div class="carousel-controls w-50 text-lg-end mt-5">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicatorsnew"
                data-bs-slide="prev"
                class="rounded-5 btn btnarrow"
              >
                <span>→</span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicatorsnew"
                data-bs-slide="next"
                class="rounded-5 btn btnarrow"
              >
                <span>←</span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div id="carouselExampleIndicatorsnew" class="carousel slide pt-2">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicatorsnew"
                data-bs-slide-to="0"
                class="active d-none"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                class="d-none"
                type="button"
                data-bs-target="#carouselExampleIndicatorsnew"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                class="d-none"
                type="button"
                data-bs-target="#carouselExampleIndicatorsnew"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active  mb-5">
                <div class="row gap-4 gap-lg-0">
                  <div class="col-md-12 col-lg-4">
                    <div class="card p-0 border-0">
                      <div class="card-body p-0">
                        <img
                          src={require("../Img/whatwe_do.png")}
                          className="d-block w-100 img-fluid object-fit-cover"
                          style={{ height: "380px", width: "460px" }}
                          alt="me"
                        />
                      </div>
                      <div class="card-footer position-absolute bottom-0 mb-3 border-0 text-white">
                        <h3 class="card-title fw-bold">
                          Shape tomorrow’s education
                        </h3>
                        <p class="card-text d-flex align-items-center">
                          <FiCalendar class="iconcolor me-2" />
                          Started on August 10, 2025 to November 13, 2026
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 col-lg-4">
                    <div class="card p-0 border-0">
                      <div class="card-body p-0">
                        <img
                          src={require("../Img/event1.webp")}
                          className="d-block w-100 img-fluid object-fit-cover"
                          style={{ height: "380px", width: "460px" }}
                          alt="me"
                        />
                      </div>
                      <div class="card-footer position-absolute bottom-0 mb-3 border-0 text-white">
                        <h3 class="card-title fw-bold">
                          Startup Growth Summit
                        </h3>
                        <p class="card-text d-flex align-items-center">
                          <FiCalendar class="iconcolor me-2" />
                          Started on April 10, 2025 to July 13, 2026
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 col-lg-4">
                    <div class="card p-0 border-0">
                      <div class="card-body p-0">
                        <img
                          src={require("../Img/zoho_owner.webp")}
                          className="d-block w-100 img-fluid object-fit-cover"
                          style={{ height: "380px", width: "460px" }}
                          alt="me"
                        />
                      </div>
                      <div class="card-footer position-absolute bottom-0 mb-3 border-0 text-white">
                        <h3 class="card-title fw-bold">
                          Meet-up with Zoho Owner
                        </h3>
                        <p class="card-text d-flex align-items-center">
                          <FiCalendar class="iconcolor me-2" />
                          Started on Jan 10, 2025 to Jun 13, 2026
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col-md-12 col-lg-4">
                    <div class="card p-0 border-0">
                      <div class="card-body p-0">
                        <img
                          src={require("../Img/lastevent3.png")}
                          className="d-block w-100 img-fluid object-fit-cover"
                          style={{ height: "380px", objectPosition: "left" }}
                          alt="me"
                        />
                      </div>
                      <div class="card-footer position-absolute bottom-0 mb-3 border-0 text-white">
                        <h3 class="card-title fw-bold">Seminar on AI</h3>
                        <p class="card-text d-flex align-items-center">
                          <FiCalendar class="iconcolor me-2" />
                          Started on feb 22, 2025 to Dec 30, 2026
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 col-lg-4">
                    <div class="card p-0 border-0">
                      <div class="card-body p-0">
                        <img
                          src={require("../Img/event2.webp")}
                          className="d-block w-100 img-fluid object-fit-cover"
                          style={{ height: "380px", width: "460px" }}
                          alt="me"
                        />
                      </div>
                      <div class="card-footer position-absolute bottom-0 mb-3 border-0 text-white">
                        <h3 class="card-title fw-bold">
                          Sport's Event
                        </h3>
                        <p class="card-text d-flex align-items-center">
                          <FiCalendar class="iconcolor me-2" />
                          Started on Sep 13, 2025 to Dec 30, 2026
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 col-lg-4">
                    <div class="card p-0 border-0">
                      <div class="card-body p-0">
                        <img
                          src={require("../Img/lastevent7.png")}
                          className="d-block w-100 img-fluid object-fit-cover"
                          style={{ height: "380px", width: "460px" }}
                          alt="me"
                        />
                      </div>
                      <div class="card-footer position-absolute bottom-0 mb-3 border-0 text-white">
                        <h3 class="card-title fw-bold">AI digital marketing</h3>
                        <p class="card-text d-flex align-items-center">
                          <FiCalendar class="iconcolor me-2" />
                          Started on Sep 13, 2025 to Dec 30, 2026
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="d-flex justify-content-center mt-5 pt-5 mb-5">
                <div class="text-center">
                  <p class="fw-semibold mb-1 text-uppercase text-white">
                    <small>Feedback</small>
                  </p>
                  <h2 class="display-5 fw-bold mb-4 text-white">
                    What our customers are saying <br /> about the latest events
                  </h2>
                </div>
              </div>
              <div class="row mt-4 gap-4 gap-md-0">
                <div class="col-md-6 col-lg-6 col-xl-3">
                  <div
                    class="card pt-4 pb-4 bg-transparent text-white border-7 w-100"
                    style={{ width: "270px" }}
                  >
                    <div class="card-header bg-transparent border-0">
                      <div class="d-flex gap-4">
                        <div>
                          <img
                            src={require("../Img/male_avatar.JPG")}
                            className="d-block w-100 rounded-5 img-fluid"
                            style={{ height: "64px", width: "70px" }}
                            alt="me"
                          />
                        </div>
                        <div>
                          <h5>Sridahr Vembu</h5>
                          <p>Chennai</p>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <p class="card-text">
                        A game-changing experience connecting me with top entrepreneurs and investors!
                      </p>
                    </div>
                    <div class="card-footer border-0 bg-transparent">
                      Feb 22, 2024
                    </div>
                  </div>
                  <div
                    class="card pt-4 pb-4 bg-transparent text-white border-7 w-100 mt-4"
                    style={{ width: "270px" }}
                  >
                    <div class="card-header bg-transparent border-0">
                      <div class="d-flex gap-4">
                        <div>
                          <img
                            src={require("../Img/female.jpg")}
                            className="d-block w-100 rounded-5 img-fluid"
                            style={{ height: "64px", width: "70px" }}
                            alt="me"
                          />
                        </div>
                        <div>
                          <h5>Priya</h5>
                          <p>Chennai</p>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <p class="card-text">
                        {" "}
                        The workshops were practical and gave me strategies to scale my startup.
                      </p>
                    </div>
                    <div class="card-footer border-0 bg-transparent">
                      may 6 , 2024
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-3">
                  <div
                    class="card pt-4 pb-4 bg-transparent text-white border-7 w-100"
                    style={{ width: "270px" }}
                  >
                    <div class="card-header bg-transparent border-0">
                      <div class="d-flex gap-4">
                        <div>
                          <img
                            src={require("../Img/female.jpg")}

                            className="d-block w-100 rounded-5 img-fluid"
                            style={{ height: "64px", width: "70px" }}
                            alt="me"
                          />
                        </div>
                        <div>
                          <h5>Preethika </h5>
                          <p>Chennai</p>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <p class="card-text">
                        Amazing networking opportunities and insightful keynote sessions.
                      </p>
                    </div>
                    <div class="card-footer border-0 bg-transparent">
                      july 8, 2024
                    </div>
                  </div>
                  <div
                    class="card pt-4 pb-4 bg-transparent text-white border-7 w-100 mt-4"
                    style={{ width: "270px" }}
                  >
                    <div class="card-header bg-transparent border-0">
                      <div class="d-flex gap-4">
                        <div>
                          <img
                            src={require("../Img/male_avatar.JPG")}

                            className="d-block w-100 rounded-5 img-fluid"
                            style={{ height: "64px", width: "70px" }}
                            alt="me"
                          />
                        </div>
                        <div>
                          <h5>Anoop N</h5>
                          <p>Chennai</p>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <p class="card-text">
                        Demo Day helped me pitch confidently and attract potential investors.
                      </p>
                    </div>
                    <div class="card-footer border-0 bg-transparent">
                      August 9, 2024
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-3 mt-4">
                  <div
                    class="card pt-4 pb-4 bg-transparent text-white border-7 w-100"
                    style={{ width: "270px" }}
                  >
                    <div class="card-header bg-transparent border-0">
                      <div class="d-flex gap-4">
                        <div>
                          <img
                            src={require("../Img/male_avatar.JPG")}

                            className="d-block w-100 rounded-5 img-fluid"
                            style={{ height: "64px", width: "70px" }}
                            alt="me"
                          />
                        </div>
                        <div>
                          <h5>Vishesh Rajaram</h5>
                          <p>Chennai</p>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <p class="card-text">
                        Loved the mentorship roundtables; they gave me clarity on business decisions
                      </p>
                    </div>
                    <div class="card-footer border-0 bg-transparent">
                      November 10, 2024
                    </div>
                  </div>
                  <div
                    class="card pt-4 pb-4 bg-transparent text-white border-7 w-100 mt-4"
                    style={{ width: "270px" }}
                  >
                    <div class="card-header bg-transparent border-0">
                      <div class="d-flex gap-4">
                        <div>
                          <img
                            src={require("../Img/female.jpg")}
                            className="d-block w-100 rounded-5 img-fluid"
                            style={{ height: "64px", width: "70px" }}
                            alt="me"
                          />
                        </div>
                        <div>
                          <h5>Meera</h5>
                          <p>Chennai</p>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <p class="card-text">
                        Every session was actionable and highly relevant for early-stage founders.
                      </p>
                    </div>
                    <div class="card-footer border-0 bg-transparent">
                      Dec 30 2024
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-3">
                  <div
                    class="card pt-4 pb-4 bg-transparent text-white border-7 w-100"
                    style={{ width: "270px" }}
                  >
                    <div class="card-header bg-transparent border-0">
                      <div class="d-flex gap-4">
                        <div>
                          <img
                            src={require("../Img/female.jpg")}
                            className="d-block w-100 rounded-5 img-fluid"
                            style={{ height: "64px", width: "70px" }}
                            alt="me"
                          />
                        </div>
                        <div>
                          <h5>Gokula</h5>
                          <p>Chennai</p>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <p class="card-text">
                        The gala dinner was a perfect setting for meaningful interactions with industry leaders
                      </p>
                    </div>
                    <div class="card-footer border-0 bg-transparent">
                      Jan 7, 2024
                    </div>
                  </div>
                  <div
                    class="card pt-4 pb-4 bg-transparent text-white border-7 w-100 mt-4"
                    style={{ width: "270px" }}
                  >
                    <div class="card-header bg-transparent border-0">
                      <div class="d-flex gap-4">
                        <div>
                          <img
                            src={require("../Img/male_avatar.JPG")}

                            className="d-block w-100 rounded-5 img-fluid"
                            style={{ height: "64px", width: "70px" }}
                            alt="me"
                          />
                        </div>
                        <div>
                          <h5>Phillips</h5>
                          <p>Chennai</p>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <p class="card-text">
                        An inspiring event that motivates you to take your startup to the next level.
                      </p>
                    </div>
                    <div class="card-footer border-0 bg-transparent">
                      Feb 8, 2024
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5 pt-5 mb-5 pb-5 container text-body-tertiary">
        <div>
          <p class="fw-semibold mb-3 text-uppercase text-center text-dark"><small>clients</small></p>
          <h2 class="display-5 fw-bold mb-5 text-center text-dark">Trusted partner</h2>
        </div>
        <div id="trustedpartner" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">

            <div class="carousel-item active">
              <div class="row gap-4 gap-sm-0">
                <div class="col-md-4">
                  <div class="card">
                    <div class="card-body">
                      <img src={require('../Img/b1.avif')} style={{ height: "120px" }} className="d-block w-100 img-fluid object-fit-cover" alt="me" />
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card">
                    <div class="card-body">
                      <img src={require('../Img/b2.webp')} style={{ height: "120px" }} className="d-block w-100 img-fluid object-fit-cover" alt="me" />
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card">
                    <div class="card-body">
                      <img src={require('../Img/b3.avif')} style={{ height: "120px" }} className="d-block w-100 img-fluid object-fit-cover" alt="me" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="row gap-4 gap-sm-0">
                <div class="col-md-4">
                  <div class="card">
                    <div class="card-body">
                      <img src={require('../Img/b4.avif')} style={{ height: "120px" }} className="d-block w-100 img-fluid object-fit-cover" alt="me" />
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card">

                    <div class="card-body">
                      <img src={require('../Img/b5.avif')} style={{ height: "120px" }} className="d-block w-100 img-fluid object-fit-cover" alt="me" />
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card">
                    <div class="card-body">
                      <img src={require('../Img/b6.avif')} style={{ height: "120px" }} className="d-block w-100 img-fluid object-fit-cover" alt="me" />
                    </div>
                  </div>
                </div>
              </div>
            </div>



          </div>

          <button class="carousel-control-prev" type="button" data-bs-target="#trustedpartner" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#trustedpartner" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

      </div>

      <div class="mt-5 pt-5 container text-body-tertiary ">
        <div>
          <p class="fw-semibold mb-3 text-uppercase text-center text-dark">
            <small>Spark Innovation</small>
          </p>
          <h2 class="display-5 fw-bold mb-5 text-center text-dark">
            Join Tamil Nadu’s premier hub for <br /> innovation and entrepreneurship
          </h2>
          <div class="row">
            <iframe
              src="https://www.youtube.com/embed/7hsOiOtjiGg"
              title="YouTube video"
              allowfullscreen
              style={{ height: "560px" }}
            ></iframe>
          </div>
        </div>
      </div>

      <div class="mt-5 mb-5 pb-5 pt-5 container text-body-tertiary">
        <div>
          <p class="fw-semibold mb-3 text-uppercase text-center text-dark">
            <small>Blog</small>
          </p>
          <h2 class="display-5 fw-bold mb-5 text-center text-dark">
            Our speakers
          </h2>
        </div>
        <div id="teamCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row">
                <div class="col-md-3">
                  <div class="card h-100">
                    <div class="card-header bg-transparent border-0 p-0">
                      <img
                        src={require("../Img/s4.jpg")}
                        style={{ height: "320px" }}
                        className="d-block w-100 img-fluid"
                        alt="me"
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">Andy Walker</h5>
                      <p class="card-text">Chief Scientist, ZOHO</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="card h-100">
                    <div class="card-header bg-transparent border-0 p-0">
                      <img
                        src={require("../Img/s1.jpg")}
                        style={{ height: "320px" }}
                        className="d-block w-100 img-fluid"
                        alt="me"
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title mt-4">Diana Green</h5>
                      <p class="card-text">Chief Scientist, ZOHO</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="card h-100">
                    <div class="card-header bg-transparent border-0 p-0">
                      <img
                        src={require("../Img/s5.jpg")}
                        style={{ height: "320px" }}
                        className="d-block w-100 img-fluid"
                        alt="me"
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title mt-4">Nathan Jones</h5>
                      <p class="card-text">Chief Scientist, ZOHO</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="card">
                    <div class="card-header bg-transparent border-0 p-0">
                      <img
                        src={require("../Img/s2.jpg")}
                        style={{ height: "320px" }}
                        className="d-block w-100 img-fluid"
                        alt="me"
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title mt-4">Natalie Carter</h5>
                      <p class="card-text">Chief Scientist, ZOHO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="row">
                <div class="col-md-3">
                  <div class="card">
                    <div class="card-header bg-transparent border-0 p-0">
                      <img
                        src={require("../Img/s3.jpg")}
                        style={{ height: "320px" }}
                        className="d-block w-100 img-fluid"
                        alt="me"
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title mt-4">Anna Smith</h5>
                      <p class="card-text">Chief Scientist, ZOHO</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="card h-100">
                    <div class="card-header bg-transparent border-0 p-0">
                      <img
                        src={require("../Img/s6.jpg")}
                        style={{ height: "320px" }}
                        className="d-block w-100 img-fluid"
                        alt="me"
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">David Matthews</h5>
                      <p class="card-text">Chief Scientist, ZOHO</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="card h-100">
                    <div class="card-header bg-transparent border-0 p-0">
                      <img
                        src={require("../Img/s7.jpg")}
                        style={{ height: "320px" }}
                        className="d-block w-100 img-fluid"
                        alt="me"
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">Nick Lewis</h5>
                      <p class="card-text">Chief Scientist, ZOHO</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="card">
                    <div class="card-header bg-transparent border-0 p-0">
                      <img
                        src={require("../Img/s8.jpg")}
                        style={{ height: "320px" }}
                        className="d-block w-100 img-fluid"
                        alt="me"
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title mt-4">Linda Grant</h5>
                      <p class="card-text">Chief Scientist, ZOHO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#teamCarousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#teamCarousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
