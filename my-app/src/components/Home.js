import React, { useState, useEffect, useRef, useCallback } from "react";
import JobCard from "./JobCard";

export const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    role: "",
    company: "",
    location: "",
    minExperience: "",
    remote: "all",
    techStack: "",
    minBasePay: "",
  });

  const observer = useRef();

  const lastJobRef = useCallback(
    (node) => {
      if (loading) return;

      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          handleLoadMore();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  const fetchJobs = async (offset) => {
    setLoading(true);
    const response = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          limit: 10,
          offset: offset,
          filters: filters,
        }),
      }
    );
    const data = await response.json();

    if (Array.isArray(data.jdList)) {
      setJobs((prevJobs) => {
        return offset === 0 ? data.jdList : [...prevJobs, ...data.jdList];
      });
    } else if (data.jdList) {
      setJobs((prevJobs) => {
        return offset === 0 ? [data.jdList] : [...prevJobs, data.jdList];
      });
    } else {
      console.error("Invalid data format:", data);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchJobs(0); // Initial load
  }, [filters]); // Reload jobs when filters change

  const handleLoadMore = () => {
    fetchJobs(jobs.length);
  };

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const resetFilters = () => {
    setFilters({
      role: "",
      company: "",
      location: "",
      minExperience: "",
      remote: "all",
      techStack: "",
      minBasePay: "",
    });
  };

  const filterJobs = (job) => {
    const {
      role,
      company,
      location,
      minExperience,
      remote,
      techStack,
      minBasePay,
    } = filters;

    return (
      (role === "" || job.jobRole.toLowerCase().includes(role.toLowerCase())) &&
      (company === "" ||
        job.companyName.toLowerCase().includes(company.toLowerCase())) &&
      (location === "" ||
        job.location.toLowerCase().includes(location.toLowerCase())) &&
      (minExperience === "" || job.minExp >= parseInt(minExperience)) &&
      (remote === "all" ||
        (remote === "remote" && job.location.toLowerCase() === "remote")) &&
      (techStack === "" ||
        job.techStack.toLowerCase().includes(techStack.toLowerCase())) &&
      (minBasePay === "" || job.minJdSalary >= parseFloat(minBasePay))
    );
  };

  const filteredJobs = jobs.filter(filterJobs);

  return (
    <div className="container">
      {/* Filter Inputs */}
      <div className="filter-container">
        <div className="row">
          <div className="col-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Job Role"
              value={filters.role}
              onChange={(e) => handleFilterChange("role", e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Company Name"
              value={filters.company}
              onChange={(e) => handleFilterChange("company", e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Location"
              value={filters.location}
              onChange={(e) => handleFilterChange("location", e.target.value)}
            />
          </div>
          <div className="col-md-1">
            <select
              className="form-control"
              value={filters.minExperience}
              onChange={(e) =>
                handleFilterChange("minExperience", e.target.value)
              }
            >
              <option value="">Min Exp</option>
              {[...Array(15).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1} years
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-1">
            <select
              className="form-control"
              value={filters.remote}
              onChange={(e) => handleFilterChange("remote", e.target.value)}
            >
              <option value="all">All</option>
              <option value="remote">Remote</option>
              <option value="onsite">On-site</option>
            </select>
          </div>
          <div className="col-md-1">
            <input
              type="text"
              className="form-control"
              placeholder="Base Pay"
              value={filters.minBasePay}
              onChange={(e) => handleFilterChange("minBasePay", e.target.value)}
            />
          </div>
          <div className="col-md-1">
            <button className="btn btn-secondary" onClick={resetFilters}>
              Reset
            </button>
          </div>
        </div>
      </div>
      {/* Horizontal Line */}
      <hr className="filter-line" />
      {/* Job Cards */}
      <div className="row">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <div key={job.jdUid} className="col-md-4">
              {index === filteredJobs.length - 1 ? (
                <JobCard job={job} ref={lastJobRef} />
              ) : (
                <JobCard job={job} />
              )}
            </div>
          ))
        ) : (
          <div className="col-md-12">
            <p>No jobs found.</p>
          </div>
        )}
      </div>
      {/* Load More Button */}
      {!loading && filteredJobs.length > 0 && (
        <div className="text-center">
          <button onClick={handleLoadMore} className="btn btn-primary">
            Load More
          </button>
        </div>
      )}
      {/* Loading Indicator */}
      {loading && (
        <div className="text-center">
          <p>Loading...</p>
        </div>
      )}
      <div ref={lastJobRef}></div>
    </div>
  );
};
