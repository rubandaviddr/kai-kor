import React, { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "../About/About.css";

function Eventdetails() {
  const { state } = useLocation();
  const { id } = useParams();

  // Log the state and params for debugging
  useEffect(() => {
    console.log("Eventdetails received state:", state);
    console.log("Eventdetails received id from URL:", id);
  }, [state, id]);

  // Static event data (in a real app, this could come from an API)
  const allEvents = [
    {
      id: 1,
      title: "Startup Growth Summit 2024",
      description: "An inspiring convergence of founders, investors, and changemakers driving the future of innovation and entrepreneurship.",
      date: "10 Nov, 2024, Sunday",
      location: "Chennai Trade Centre, Tamil Nadu",
      image: require("../Img/whatwe_do.png"),
      organizer: "Kai Kor Team",
      phone: "+91 44 2345 6789",
      website: "https://www.tamilpreneur.in",
    },
    {
      id: 2,
      title: "Certification Program",
      description: "An inspiring convergence of founders, investors, and changemakers driving the future of innovation and entrepreneurship.",
      date: "18 Nov, 2024, Monday",
      location: "Coimbatore Innovation Hub",
      image: require("../Img/lastevent2.png"),
      organizer: "Kai Kor Team",
      phone: "+91 44 2345 6789",
      website: "https://www.tamilpreneur.in",
    },
    {
      id: 3,
      title: "Seminar on AI",
      description: "An inspiring convergence of founders, investors, and changemakers driving the future of innovation and entrepreneurship.",
      date: "25 Nov, 2024, Monday",
      location: "Madurai Tech Park",
      image: require("../Img/lastevent3.png"),
      organizer: "Kai Kor Team",
      phone: "+91 44 2345 6789",
      website: "https://www.tamilpreneur.in",
    },
    {
      id: 4,
      title: "Course on Data Science",
      description: "An inspiring convergence of founders, investors, and changemakers driving the future of innovation and entrepreneurship.",
      date: "15 Sep, 2024",
      location: "Virtual Event",
      image: require("../Img/lastevent4.png"),
      organizer: "Kai Kor Team",
      phone: "+91 44 2345 6789",
      website: "https://www.tamilpreneur.in",
    },
    {
      id: 5,
      title: "How to Build a Scalable Startup",
      description: "An inspiring convergence of founders, investors, and changemakers driving the future of innovation and entrepreneurship.",
      date: "02 Sep, 2024",
      location: "Trichy Startup Hub",
      image: require("../Img/lastevent5.png"),
      organizer: "Kai Kor Team",
      phone: "+91 44 2345 6789",
      website: "https://www.tamilpreneur.in",
    },
  ];

  // Try to get event from state, then from URL id, then fallback to default
  let event = state?.event;
  if (!event && id) {
    event = allEvents.find((e) => e.id === parseInt(id));
  }
  if (!event) {
    event = {
      title: "Event Not Found",
      description: "Sorry, the event details are not available. Please select an event from the Events page.",
      date: "N/A",
      location: "N/A",
      image: require("../Img/whatwe_do.png"),
      organizer: "Kai Kor Team",
      phone: "+91 44 2345 6789",
      website: "https://www.tamilpreneur.in",
    };
  }

  // Define unique content for each event
  const eventContent = {
    "Startup Growth Summit 2024": {
      description: [
        "The Startup Growth Summit 2024 is the premier event for Tamil entrepreneurs, bringing together visionaries, investors, and industry leaders to spark innovation and growth.",
        "Engage in high-energy panel discussions, pitch your startup to top investors, and explore cutting-edge trends in technology and business strategy.",
        "This summit is your chance to connect with the Tamil startup ecosystem and take your venture to the next level."
      ],
      highlights: [
        "Keynote addresses by renowned Tamil entrepreneurs",
        "Investor pitch competitions with real-time feedback",
        "Networking sessions with industry pioneers",
        "Workshops on scaling startups and securing funding",
        "Showcase of innovative Tamil startups"
      ]
    },
    "Certification Program": {
      description: [
        "Our Certification Program equips aspiring entrepreneurs with the skills needed to succeed in today's competitive market.",
        "Learn from industry experts through hands-on workshops covering business planning, marketing, and financial management.",
        "Earn a recognized certification to boost your entrepreneurial journey and credibility."
      ],
      highlights: [
        "Practical training in business fundamentals",
        "Mentorship from experienced entrepreneurs",
        "Interactive case studies and real-world simulations",
        "Certification upon successful completion",
        "Networking with fellow participants"
      ]
    },
    "Seminar on AI": {
      description: [
        "The Seminar on AI explores the transformative power of artificial intelligence in business and technology.",
        "Discover how AI is reshaping industries through expert-led sessions, case studies, and live demonstrations.",
        "Join us to learn how to leverage AI for your startup or business in the Tamil ecosystem."
      ],
      highlights: [
        "Insights from AI industry leaders",
        "Live demos of AI tools and applications",
        "Workshops on integrating AI into business processes",
        "Panel discussions on AI ethics and opportunities",
        "Networking with AI innovators"
      ]
    },
    "Course on Data Science": {
      description: [
        "The Course on Data Science offers a deep dive into data analytics, machine learning, and data-driven decision-making.",
        "Designed for beginners and professionals alike, this course provides practical skills to harness data for business success.",
        "Learn from top data scientists and apply your knowledge in real-world scenarios."
      ],
      highlights: [
        "Hands-on training in Python and data tools",
        "Real-world data science project experience",
        "Guidance from expert data scientists",
        "Access to exclusive datasets and resources",
        "Certificate of completion"
      ]
    },
    "How to Build a Scalable Startup": {
      description: [
        "This event focuses on the strategies and tools needed to build a startup that scales efficiently and sustainably.",
        "Learn from successful founders about growth hacking, team building, and securing scalable infrastructure.",
        "Perfect for early-stage entrepreneurs looking to create a lasting impact in the Tamil startup scene."
      ],
      highlights: [
        "Strategies for rapid and sustainable growth",
        "Insights from successful Tamil startup founders",
        "Workshops on team management and scaling operations",
        "Networking with scalable startup experts",
        "Access to growth hacking tools and resources"
      ]
    },
    "Event Not Found": {
      description: [
        "The event you are looking for could not be found.",
        "Please return to the Events page to select an upcoming or past event for more details."
      ],
      highlights: [
        "Check out our upcoming events for exciting opportunities",
        "Explore past event recaps for inspiration",
        "Join our community to stay updated on future events"
      ]
    }
  };

  const content = eventContent[event.title] || eventContent["Event Not Found"];

  return (
    <div>
      <div className="bk4 text-white d-flex justify-content-center align-items-center mb-5">
        <div>
          <h2 className="fw-bold">Event Details</h2>
          <div className="d-flex gap-1 justify-content-center">
            <Link className="nav-link text-white" aria-current="page" to="/">
              Home
            </Link>
            <span>/</span>
            <p className="d-flex"> Events Details</p>
          </div>
        </div>
      </div>
      <div className="event-details-area pt-5 pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-12 mb-4">
              <div className="details-img">
                <img
                  src={event.image}
                  alt={event.title}
                  className="img-fluid rounded mb-4"
                />
                <h2 className="mb-3">{event.title}</h2>
                {content.description.map((paragraph, index) => (
                  <p key={index} className="mb-3">{paragraph}</p>
                ))}
                <ul className="list-unstyled">
                  {content.highlights.map((highlight, index) => (
                    <li key={index} className="mb-2">
                      <i className="bi bi-check-circle-fill text-primary me-2"></i>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-5 col-md-12">
              <div className="common-details-content bg-light p-4 rounded mb-4">
                <h3 className="mb-4">Event Details</h3>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <strong>Location:</strong>{" "}
                    <a href="#" className="text-decoration-none text-primary">
                      {event.location}
                    </a>
                  </li>
                  <li className="mb-3">
                    <strong>Date:</strong> <span>{event.date}</span>
                  </li>
                  <li className="mb-3">
                    <strong>Time:</strong> <span>10:00 AM - 6:00 PM</span>
                  </li>
                  <li className="mb-3">
                    <strong>Organizer:</strong>{" "}
                    <a href="#" className="text-decoration-none text-primary">
                      {event.organizer}
                    </a>
                  </li>
                  <li className="mb-3">
                    <strong>Phone:</strong>{" "}
                    <a
                      href={`tel:${event.phone}`}
                      className="text-decoration-none text-primary"
                    >
                      {event.phone}
                    </a>
                  </li>
                  <li className="mb-3">
                    <strong>Website:</strong>{" "}
                    <a
                      href={event.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-primary"
                    >
                      {event.website}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="details-recent">
                <div className="events-inner mb-4">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <a
                        href="https://www.tamilpreneur.in/events/startup-summit-2023"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=150&q=80"
                          alt="Startup Summit 2023"
                          className="img-fluid rounded"
                        />
                      </a>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <span className="d-block text-muted">10 Dec</span>
                      <h3 className="h5 mb-2">
                        <a
                          href="https://www.tamilpreneur.in/events/startup-summit-2023"
                          className="text-decoration-none text-dark"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Kai Kor Startup Summit 2023 Highlights
                        </a>
                      </h3>
                      <p className="mb-0">
                        A recap of last year's inspiring sessions and networking events for Tamil startups.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="events-inner">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <a
                        href="https://www.tamilpreneur.in/blog/media-coverage-2023"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=150&q=80"
                          alt="Media Coverage"
                          className="img-fluid rounded"
                        />
                      </a>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <span className="d-block text-muted">20 Nov</span>
                      <h3 className="h5 mb-2">
                        <a
                          href="https://www.tamilpreneur.in/blog/media-coverage-2023"
                          className="text-decoration-none text-dark"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Media Coverage of Kai Kor Events
                        </a>
                      </h3>
                      <p className="mb-0">
                        Highlights from the press and media on the impact of Kai Kor initiatives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eventdetails;