import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <a className="navbar-brand" href="/">
                <img src="logo.png" alt="Logo" />
                United Outdoors
            </a>
            <div className="nav-links">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/profile">My Profile</Link>
                <Link className="nav-link" to="/powerbi">Dashboard</Link>
            </div>
        </nav>
    );
};

export default Navbar;