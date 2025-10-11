import React from 'react'
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div>
            <div class="container-fluid mt-5 bg-dark text-white">
                <div class="container">
                    <div class=" row pt-5 pb-4">

                        <div class="col-md-6 col-lg-3"><h2 class="fw-bold">Kai Kor</h2></div>

                        <div class="col-md-6 col-lg-3 d-flex flex-column gap-3">
                            <h2 class="fw-bold">Links</h2>
                            <Link className="nav-link active text-white" aria-current="page" to="/">
                                Home
                            </Link>
                            <Link className="nav-link text-white" to="/about">
                                About
                            </Link>
                            <Link className="nav-link text-white" to="/events">
                                Events List
                            </Link>

                            <Link className="nav-link text-white " to="/membership">
                                Membership
                            </Link>
                               <Link className="nav-link text-white" to="/login">
                                Joining form
                            </Link>

                            <Link className="nav-link text-white" to="/contact">
                                Contact
                            </Link>

                        </div>

                        <div class="col-md-6 col-lg-3 mt-5 mt-lg-0 d-flex flex-column gap-3">
                            <h2 class="fw-bold">Socials</h2>
                            <a href="#" class="text-decoration-none text-white">Facebook</a>
                            <a href="#" class="text-decoration-none text-white">Twitter</a>
                            <a href="#" class="text-decoration-none text-white">Instagram</a>
                            <a href="#" class="text-decoration-none text-white">Whatsapp</a>
                        </div>

                        <div class="col-md-6 col-lg-3 mt-5 mt-lg-0 d-flex flex-column gap-3">
                            <h2 class="fw-bold">Contact Us</h2>
                            <address>
                                45, Marudupandiar Rd, Kamarajapuram, Velachery, Chennai-600004.<br /><br />
                                Email: info@greatmindstechnology.in<br />
                                Phone number: +91 9500101075<br />
                            </address>
                        </div>

                        {/* <hr class="mt-5 mb-4" />

                        <div class="d-flex justify-content-center"><p>Kai Kor © 2025. All rights reserved.</p></div> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer