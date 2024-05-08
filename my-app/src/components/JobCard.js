import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  .job-card {
    border: 1px solid #ddd; /* Lighter border color */
    border-radius: 15px; /* Increased border radius */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Soft shadow effect */
    overflow: hidden; /* Hide overflow content */
    transition: box-shadow 0.3s ease;
    width: 360px; /* Increased card width */
    margin: 20px; /* Added margin for spacing */
    background-color: #fff; /* Card background color */
  }

  .job-card:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); /* Darker shadow on hover */
  }

  .job-card .card-body {
    padding: 20px;
  }

  .job-card .card-img-top {
    width: 100%; /* Make image responsive */
    height: 200px; /* Fixed height */
    object-fit: cover; /* Scale image to cover */
    border-top-left-radius: 15px; /* Rounded corners */
    border-top-right-radius: 15px;
  }

  .job-card .card-title {
    font-size: 24px; /* Larger font size for title */
    color: #333; /* Darker text color */
    margin-bottom: 10px; /* Added margin */
  }

  .job-card .card-text {
    color: #666; /* Slightly darker text color */
    font-size: 16px; /* Medium font size */
    margin-bottom: 10px; /* Added margin */
  }

  .job-card .description {
    max-height: ${({ expanded }) => (expanded ? "none" : "80px")};
    overflow: hidden;
    margin-bottom: 10px;
    color: #666; /* Text color for description */
    font-size: 16px; /* Font size for description */
    line-height: 1.5; /* Line height for better readability */
  }

  .job-card .expand {
    cursor: pointer;
    color: blue;
    text-decoration: underline;
    margin-top: 5px;
    font-size: 16px; /* Font size for expand text */
  }

  .job-card .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    margin-top: 15px; /* Added margin between button and description */
    width: 100%; /* Make button full width */
  }
`;

const JobCard = ({ job }) => {
  console.log(job);
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <Wrapper expanded={expanded}>
      <div className="card job-card">
        <img src={job.logoUrl} className="card-img-top" alt={job.companyName} />
        <div className="card-body">
          <h5 className="card-title">{job.jobRole}</h5>
          <p className="card-text">Company: {job.companyName}</p>
          <p className="card-text">Location: {job.location}</p>
          <p className="card-text description">
            {expanded
              ? job.jobDetailsFromCompany
              : job.jobDetailsFromCompany.slice(0, 80)}
          </p>
          <p className="card-text expand" onClick={toggleDescription}>
            {expanded ? "Show less" : "Show more"}
          </p>
          <p className="card-text">
            Experience: {job.minExp} - {job.maxExp} years
          </p>
          <a
            href={job.jdLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Apply
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default JobCard;
