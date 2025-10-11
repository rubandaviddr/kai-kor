import React from "react";
import { Link } from "react-router-dom";
import "../About/About.css";

function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Startup Growth Summit 2024",
      description: "An inspiring convergence of founders, investors, and changemakers driving the future of innovation and entrepreneurship.",
      date: "10 Nov, 2024, Sunday",
      time: "9:00 AM - 5:00 PM",
      location: "Chennai Trade Centre, Tamil Nadu",
      image: require("../Img/whatwe_do.png"),
      status: "Register",
      detailsLink: "#",
      actionLink: "/eventregistration",
    },
    {
      id: 2,
      title: "Certification Program",
      description: "An inspiring convergence of founders, investors, and changemakers driving the future of innovation and entrepreneurship.",
      date: "18 Nov, 2024, Monday",
      time: "10:00 AM - 3:00 PM",
      location: "Coimbatore Innovation Hub",
      image: require("../Img/lastevent2.png"),
      status: "Register",
      detailsLink: "#",
      actionLink: "/eventregistration",
    },
    {
      id: 3,
      title: "Seminar on AI",
      description: "An inspiring convergence of founders, investors, and changemakers driving the future of innovation and entrepreneurship.",
      date: "25 Nov, 2024, Monday",
      time: "2:00 PM - 6:00 PM",
      location: "Madurai Tech Park",
      image: require("../Img/lastevent3.png"),
      status: "Sold Out",
      detailsLink: "#",
      actionLink: "#",
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Course on Data Science",
      description: "An inspiring convergence of founders, investors, and changemakers driving the future of innovation and entrepreneurship.",
      date: "15 Sep, 2024",
      time: "11:00 AM - 4:00 PM",
      location: "Virtual Event",
      image: require("../Img/lastevent4.png"),
      status: "Closed",
      detailsLink: "#",
      actionLink: "#",
    },
    {
      id: 5,
      title: "How to Build a Scalable Startup",
      description: "An inspiring convergence of founders, investors, and changemakers driving the future of innovation and entrepreneurship.",
      date: "02 Sep, 2024",
      time: "1:00 PM - 5:00 PM",
      location: "Trichy Startup Hub",
      image: require("../Img/lastevent5.png"),
      status: "Closed",
      detailsLink: "#",
      actionLink: "#",
    },
  ];

  const logInteraction = (action, event) => {
    console.log({
      timestamp: new Date().toISOString(),
      action,
      eventId: event.id,
      eventTitle: event.title,
      eventDate: event.date,
      eventTime: event.time,
      eventLocation: event.location,
      eventStatus: event.status,
    });
  };

  return (
    <div>
      <div className="bk4 text-white d-flex justify-content-center align-items-center mb-5">
        <div>
          <h2 className="fw-bold">Events</h2>
          <div className="d-flex gap-1 justify-content-center">
            <Link className="nav-link text-white" aria-current="page" to="/">
              Home
            </Link>
            <span>/</span>
            <p className="d-flex"> Events</p>
          </div>
        </div>
      </div>
      <div className="container py-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-12 mb-4">
            <div className="events-top mb-5">
              <div className="mb-4">
                <h2 className="h2">Upcoming Kai Kor Events</h2>
              </div>
              {upcomingEvents.map((event) => (
                <div key={event.id} className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <div className="row align-items-center flex-column flex-md-row">
                      <div className="col mb-3 mb-md-0">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="img-fluid rounded object-fit-cover"
                          style={{ width: "450px", height: "250px" }}
                        />
                      </div>
                      <div className="col">
                        <h3 className="h4 mb-2">
                          <Link
                            to={{
                              pathname: `/eventdetails/${event.id}`,
                              state: { event },
                            }}
                            className="text-decoration-none text-dark"
                            onClick={() => logInteraction("View Details", event)}
                          >
                            {event.title}
                          </Link>
                        </h3>
                        <p>{event.description}</p>
                        <div className="d-flex">
                          <div className="w-100">
                            <ul className="list-unstyled">
                              <li className="mb-2">
                                <i className="bi bi-calendar-event me-2 text-primary-1"></i>
                                <span>{event.date}</span>
                                <i className="bi bi-clock ms-2 me-2 text-primary-1"></i>
                                <span>{event.time}</span>
                              </li>
                              <li>
                                <i className="bi bi-geo-alt me-2 text-primary-1"></i>
                                <Link
                                  to={event.detailsLink}
                                  className="text-decoration-none text-dark"
                                >
                                  {event.location}
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between flex-shrink-1">
                          <Link
                            to={{
                              pathname: `/eventdetails/${event.id}`,
                              state: { event },
                            }}
                            className="btn btn-outline-primary-1 text-truncate me-2"
                            onClick={() => logInteraction("View Details", event)}
                          >
                            View Details
                          </Link>
                          <a
                            className={`btn ${event.status === "Sold Out" || event.status === "Closed"
                              ? "btn-secondary disabled"
                              : "btn-primary-2"
                              } text-truncate`}
                            href={event.actionLink}
                            onClick={() => logInteraction(event.status, event)}
                          >
                            {event.status}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="events-bottom">
              <div className="mb-4">
                <h2 className="h2">Past Events</h2>
              </div>
              {pastEvents.map((event) => (
                <div key={event.id} className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <div className="row align-items-center flex-column flex-md-row">
                      <div className="col mb-3 mb-md-0">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="img-fluid rounded object-fit-cover"
                          style={{ width: "450px", height: "250px" }}
                        />
                      </div>
                      <div className="col">
                        <h3 className="h4 mb-2">
                          <Link
                            to={{
                              pathname: `/eventdetails/${event.id}`,
                              state: { event },
                            }}
                            className="text-decoration-none text-dark"
                            onClick={() => logInteraction("View Recap", event)}
                          >
                            {event.title}
                          </Link>
                        </h3>
                        <p>{event.description}</p>
                        <div className="d-flex">
                          <div className="w-100">
                            <ul className="list-unstyled">
                              <li className="mb-2">
                                <i className="bi bi-calendar-event me-2 text-primary-1"></i>
                                <span>{event.date}</span>
                                <i className="bi bi-clock ms-2 me-2 text-primary-1"></i>
                                <span>{event.time}</span>
                              </li>
                              <li>
                                <i className="bi bi-geo-alt me-2 text-primary-1"></i>
                                <Link
                                  to={event.detailsLink}
                                  className="text-decoration-none text-dark"
                                >
                                  {event.location}
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between flex-shrink-1">
                          <Link
                            to={{
                              pathname: `/eventdetails/${event.id}`,
                              state: { event },
                            }}
                            className="btn btn-outline-primary-1 text-truncate me-2"
                            onClick={() => logInteraction("View Recap", event)}
                          >
                            View Recap
                          </Link>
                          <a
                            className="btn btn-secondary text-truncate disabled"
                            href={event.actionLink}
                            onClick={() => logInteraction(event.status, event)}
                          >
                            {event.status}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-3 col-md-12">
            <div className="mb-4">
              <h2 className="h2">Volunteer</h2>
            </div>
            <div className="card shadow-sm">
              <div className="card-header bg-transparent border-0 rounded-2">
                <img
                  src={require("../Img/lastevent6.png")}
                  style={{ height: "174px" }}
                  alt="Volunteer"
                  className="card-img-top mt-2 object-fit-cover"
                />
              </div>
              <div className="card-body">
                <div class="d-flex align-items-center justify-content-between flex-column  flex-xl-row">
                  <div>
                    <h3 className="h5 mb-0">
                      <a href="#" className="text-decoration-none text-dark">
                        Become a volunteer
                      </a>
                    </h3>
                  </div>
                  <div>
                    <Link
                      to="/membership"
                      className="btn btn-primary-2 d-flex align-items-center justify-content-center text-truncate nav-link text-white"
                      aria-current="page"
                      onClick={() => logInteraction("Join Now", { id: "volunteer", title: "Become a volunteer" })}
                    >
                      Join Now <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
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

export default Events;