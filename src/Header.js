import React from 'react'
import './Pages/Home/Home.css'
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { BsClipboard } from 'react-icons/bs';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div>
            <div class="bg-body-tertiary py-2">
                <nav class="navbar navbar-expand-lg bg-body-tertiary container py-4">
                    <div class="container-fluid">
                        <h2><a class="text-decoration-none text-dark" >Entrepreneur</a></h2>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    Home
                                </Link>

                                <Link className="nav-link" to="/about">
                                    About
                                </Link>

                                <Link className="nav-link" to="/events">
                                    Events
                                </Link>

                                <Link className="nav-link" to="/membership">
                                    Membership
                                </Link>

                                <Link className="nav-link" to="/contact">
                                    Contact
                                </Link>
                            </ul>
                            <div class="d-flex align-items-center gap-3" >
                                <a href="#" class='text-dark'><BsClipboard /></a>
                                <a href="#" class='text-dark'><FiFacebook /></a>
                                <a href="#" class='text-dark'><FiInstagram /></a>
                                <a href="#" class='text-dark'><FiTwitter /></a>
                                <Link to="/login" className="btn btn-primary-1 nav-link text-white" aria-current="page" >
                                    Login 
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header