import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom"; // Assuming you're using React Router for navigation

const Wrapper = styled.section`
  /* Navbar styles */
  .navbar {
    border-bottom: 2px solid #333;
    padding: 10px 0;
  }

  .navbar-brand {
    font-size: 1.8rem;
    color: #fff;
    transition: color 0.3s ease;
    margin-right: auto; /* Pushes the brand to the left */
  }

  .navbar-brand:hover {
    color: #ffd700; /* Change brand color on hover */
  }

  .navbar-toggler {
    border: none;
    outline: none;
    color: #fff;
    font-size: 1.5rem;
  }

  /* Navigation links styles */
  .navbar-nav {
    display: flex;
    justify-content: flex-end; /* Aligns links to the right */
  }

  .nav-item {
    margin-left: 15px; /* Adjust spacing between links */
  }

  .nav-link {
    color: #fff;
    font-size: 1.2rem;
    transition: color 0.3s ease;
  }

  .nav-link:hover {
    color: #ffd700; /* Change link color on hover */
  }

  /* Animation for navbar */
  @keyframes slideIn {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }

  .navbar-nav {
    animation: slideIn 0.5s forwards;
  }

  /* Background gradient effect */
  .navbar {
    background: linear-gradient(to right, #3a3a3a, #000000);
  }

  /* Active link styles */
  .navbar-nav .active .nav-link {
    color: #ffd700; /* Change active link color */
  }
`;

const Navbar = () => {
  return (
    <Wrapper>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Jobs Provider
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
