import React from "react";
import styled from "styled-components";
const Wrapper = styled.section`
  /* App.css */

  /* Custom Navbar */
  .custom-navbar {
    background-color: #333; /* Dark background color */
  }

  /* Logo Image */
  .logo-img {
    width: 120px; /* Adjust according to your logo size */
    height: auto;
  }

  /* Navbar Links */
  .navbar-nav .nav-link {
    color: #fff; /* Text color */
    font-weight: 500; /* Font weight */
    margin-left: 15px; /* Spacing between links */
  }

  /* Hover effect on Navbar Links */
  .navbar-nav .nav-link:hover {
    color: #ffc107; /* Change text color on hover */
  }

  /* Active Navbar Link */
  .navbar-nav .nav-link.active {
    color: #ffc107; /* Active link text color */
  }

  /* Navbar Toggle Icon Color */
  .navbar-toggler-icon {
    background-color: #fff; /* Toggle icon color */
  }

  /* Responsive Navbar Collapse */
  @media (max-width: 768px) {
    .navbar-nav .nav-link {
      margin-left: 0; /* Adjust spacing for smaller screens */
    }
  }
`;
const Nav = () => {
  return (
    <Wrapper>
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
        <div className="container">
          <a className="navbar-brand" href="#home">
            <img
              src="/logo.png" // Replace with your logo image
              alt="Your Logo"
              className="d-inline-block align-top logo-img"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Nav;
