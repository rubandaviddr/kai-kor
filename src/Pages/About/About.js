import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div>
      <div class="bk4 text-white d-flex justify-content-center align-items-center">
        <div>
          <h2 class="fw-bold">About</h2>
          <div class="d-flex gap-1 justify-content-center">
            <Link className="nav-link text-white" aria-current="page" to="/">
              Home
            </Link>
            <span>/</span>
            <p class="d-flex"> About</p>
          </div>
        </div>
      </div>

      <div>
        <div class="container  pt-5 pb-5 mb-5">
          <div class="row pt-5 mt-5">
            <div class="col-md-12 col-lg-6">
              <img
                src={require("../Img/john sir.jpeg")}
                className="d-block w-100 img-fluid object-fit-cover"
                style={{ height: "500px", objectPosition: 'top center' }}
                alt="me"
              />
            </div>
            <div class="col-md-12 col-lg-6 d-md-flex align-items-md-center ">
              <div class="ps-md-0 ps-lg-5 mt-4 mt-md-4">
                <div class="text-left">
                  <p class="fw-semibold mb-1 text-uppercase  text-dark">
                    <small>our History</small>
                  </p>
                  <h2 class="display-5 fw-bold mb-5  text-dark">
                    Foundations of Impact
                  </h2>
                </div>
                <p class="text-body-tertiary">
                  Kai Kor was founded in 2024 with a simple vision — to create a
                  platform where entrepreneurs could connect, learn, and grow
                  together. What started as an idea to replicate the successful
                  Kai Kormodel soon evolved into a unique movement of its
                  own, driven by the belief that every idea deserves the right
                  support to become a success story. In its early days, Kai Kor
                  began as a small community of passionate founders, mentors,
                  and innovators. Within months, it grew into a vibrant network
                  that provided mentorship, resources, and opportunities to
                  aspiring entrepreneurs across industries and regions. From
                  2024 onwards, Kai Kor has continued to expand its reach,
                  hosting networking events, masterclasses, and collaborative
                  initiatives that empower startups to scale. Today, it stands
                  as a platform dedicated to fostering innovation, breaking
                  barriers, and building a new generation of impactful
                  entrepreneurs.
                </p>

                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pb-4">
        <div class="container mt-5 pt-5 pb-5 mb-5">
          <div class="row pt-5 mt-5">
            <div class="col-md-12 col-lg-6 d-md-flex align-items-md-center ">
              <div class="ps-md-0 ps-lg-5">
                <div class="text-left">
                  <p class="fw-semibold mb-1 text-uppercase  text-dark">
                    <small>Our goal</small>
                  </p>
                  <h2 class="display-5 fw-bold mb-5  text-dark">
                    Building the Future of Entrepreneurship
                  </h2>
                </div>

                <p class="text-body-tertiary">
                  <strong class="text-dark">Vision :</strong> To build a thriving entrepreneurial ecosystem that inspires, connects, and empowers founders to create impactful businesses and drive inclusive economic growth. It cultivates a culture of innovation, resilience, and continuous learning among entrepreneurs. The ecosystem champions diversity and inclusion by ensuring equal opportunities for entrepreneurs from all backgrounds, regions, and sectors. It also positions itself as a catalyst for sustainable development and global competitiveness.<br /> <br />{" "}
                  <strong class="text-dark">Mission :</strong> To support entrepreneurs at every stage with
                  mentorship, resources, and networking opportunities. To foster
                  innovation and collaboration by creating a strong, supportive
                  community. To bridge gaps in access to knowledge, funding, and
                  markets, especially for underrepresented and regional
                  entrepreneurs. To empower the next generation of leaders to
                  build sustainable and scalable ventures.
                </p>

               
              </div>
            </div>
            <div class="col-md-12 col-lg-6 d-md-flex align-items-md-center ">
              <img
                src={require("../Img/john_goals.jpg")}
                style={{ height: "500px", objectPosition: 'top center' }}
                className="d-block w-100 img-fluid object-fit-cover mt-4 mt-md-4"
                alt="me"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid bg-body-tertiary pb-4">
        <div class="container mt-5 pt-5  mb-5">
          <div>
            <p class="fw-semibold mb-3 text-uppercase text-center text-dark">
              <small>Blog</small>
            </p>
            <h2 class="display-5 fw-bold mb-5 text-center text-dark">
              Our features
            </h2>
          </div>
          <div class="row pt-4 gap-4 gap-md-0">
            <div class="col-lg-6">
              <div class="card h-100">
                <div class="card-header bg-transparent text-center mt-3  border-0">
                  <i className="fas fa-microphone feature-icon mb-3 mt-3 fs-2 fw-semibold"></i>
                  <h5 class="fw-semibold"> Strong Community </h5>
                </div>
                <div class="card-body mb-4">
                  <p class="card-text text-black-50">
                    Strong Community – Connect with mentors, peers, and
                    collaborators to learn, grow, and build impactful ventures
                    together.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card h-100">
                <div class="card-header bg-transparent text-center mt-3 border-0">
                  <i className="fas fa-users feature-icon mb-3 mt-3 fs-2 fw-semibold"></i>
                  <h5 class="fw-semibold">Founder Talk</h5>
                </div>
                <div class="card-body">
                  <p class="card-text text-black-50">
                    Gain insights from inspiring entrepreneurs and industry
                    leaders through interactive sessions.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card h-100">
                <div class="card-header bg-transparent text-center mt-3 border-0">
                  <i className="fas fa-question-circle feature-icon mb-3 mt-3 fs-2 fw-semibold"></i>
                  <h5 class="fw-semibold">Kickstart</h5>
                </div>
                <div class="card-body">
                  <p class="card-text text-black-50">
                    Validate and refine your startup ideas with guidance from
                    mentors and community feedback.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card h-100">
                <div class="card-header bg-transparent text-center mt-3 border-0">
                  <i className="fas fa-gift feature-icon mb-3 mt-3 fs-2 fw-semibold"></i>
                  <h5 class="fw-semibold">Networking Hub</h5>
                </div>
                <div class="card-body">
                  <p class="card-text text-black-50">
                    Join a digital-first platform to collaborate with students,
                    professionals, and entrepreneurs across Tamil Nadu and
                    beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5 pt-5 mb-5 pb-5 container text-body-tertiary">
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
              <div class="row gap-4 gap-md-0">
                <div class="col-md-3">
                  <div class="card h-100">
                    <div class="card-header bg-transparent border-0 p-0">
                      <img
                        src={require("../Img/s4.jpg")}
                        style={{ height: "320px" }}
                        className="d-block w-100 img-fluid "
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
                        className="d-block w-100 img-fluid "
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
                        className="d-block w-100 img-fluid "
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
                        className="d-block w-100 img-fluid "
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
              <div class="row gap-4 gap-md-0">
                <div class="col-md-3">
                  <div class="card">
                    <div class="card-header bg-transparent border-0 p-0">
                      <img
                        src={require("../Img/s3.jpg")}
                        style={{ height: "320px" }}
                        className="d-block w-100 img-fluid "
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
                        className="d-block w-100 img-fluid "
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
                        className="d-block w-100 img-fluid "
                        alt="me"
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title mt-4">Nick Lewis</h5>
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
                        className="d-block w-100 img-fluid "
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
      
    </div>
  );
}

export default About;
