import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="container fixed-top navbar navbar-expand-md navbar-light bg-white py-1 mt-1 shadow-sm">
            <a className="navbar-brand fw-bold" href="/">BLACKCOFFER</a>
            <button className="navbar-toggler p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar">
              <div className="navbar-nav">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
                <Link to="/reports" className="nav-link">
                  Reports
                </Link>
              </div>
            </div>
        </nav>
    )
}

export default Navbar
