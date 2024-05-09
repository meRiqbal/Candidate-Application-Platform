// // import React from "react";

// // const Filters = ({ filters, onFilterChange }) => {
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     onFilterChange(name, value);
// //   };

// //   return (
// //     <div className="filters mb-4">
// //       <input
// //         type="text"
// //         className="form-control"
// //         name="minExperience"
// //         value={filters.minExperience}
// //         onChange={handleChange}
// //         placeholder="Min Experience"
// //       />
// //       {/* Add more filter inputs */}
// //     </div>
// //   );
// // };

// // export default Filters;
// import React from "react";

// const Filters = ({ filters, onFilterChange }) => {
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     onFilterChange(name, value);
//   };

//   return (
//     <div className="filters mb-4">
//       <input
//         type="text"
//         className="form-control mb-2"
//         name="minExperience"
//         value={filters.minExperience}
//         onChange={handleChange}
//         placeholder="Min Experience"
//       />
//       <input
//         type="text"
//         className="form-control mb-2"
//         name="companyName"
//         value={filters.companyName}
//         onChange={handleChange}
//         placeholder="Company Name"
//       />
//       <input
//         type="text"
//         className="form-control mb-2"
//         name="location"
//         value={filters.location}
//         onChange={handleChange}
//         placeholder="Location"
//       />
//       <select
//         className="form-control mb-2"
//         name="remote"
//         value={filters.remote}
//         onChange={handleChange}
//       >
//         <option value="">Remote/On-site</option>
//         <option value="true">Remote</option>
//         <option value="false">On-site</option>
//       </select>
//       <input
//         type="text"
//         className="form-control mb-2"
//         name="techStack"
//         value={filters.techStack}
//         onChange={handleChange}
//         placeholder="Tech Stack"
//       />
//       <input
//         type="text"
//         className="form-control mb-2"
//         name="role"
//         value={filters.role}
//         onChange={handleChange}
//         placeholder="Role"
//       />
//       <input
//         type="text"
//         className="form-control mb-2"
//         name="minBasePay"
//         value={filters.minBasePay}
//         onChange={handleChange}
//         placeholder="Min Base Pay"
//       />
//     </div>
//   );
// };

// export default Filters;
import React from "react";

const Filters = ({ filters, onFilterChange, onSortChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  const handleSortChange = (e) => {
    const { value } = e.target;
    onSortChange(value);
  };

  return (
    <div className="filters mb-4">
      <input
        type="text"
        className="form-control mb-2"
        name="minExperience"
        value={filters.minExperience}
        onChange={handleChange}
        placeholder="Min Experience"
      />
      <input
        type="text"
        className="form-control mb-2"
        name="companyName"
        value={filters.companyName}
        onChange={handleChange}
        placeholder="Company Name"
      />
      <input
        type="text"
        className="form-control mb-2"
        name="location"
        value={filters.location}
        onChange={handleChange}
        placeholder="Location"
      />
      <select
        className="form-control mb-2"
        name="remote"
        value={filters.remote}
        onChange={handleChange}
      >
        <option value="">Remote/On-site</option>
        <option value="Remote">Remote</option>
        <option value="On-site">On-site</option>
      </select>
      <input
        type="text"
        className="form-control mb-2"
        name="techStack"
        value={filters.techStack}
        onChange={handleChange}
        placeholder="Tech Stack"
      />
      <input
        type="text"
        className="form-control mb-2"
        name="role"
        value={filters.role}
        onChange={handleChange}
        placeholder="Role"
      />
      <input
        type="text"
        className="form-control mb-2"
        name="minBasePay"
        value={filters.minBasePay}
        onChange={handleChange}
        placeholder="Min Base Pay"
      />
      <select
        className="form-control mb-2"
        name="sort"
        value={filters.sort}
        onChange={handleSortChange}
      >
        <option value="">Sort By</option>
        <option value="minExp">Min Experience</option>
        <option value="companyName">Company Name</option>
        <option value="location">Location</option>
        <option value="techStack">Tech Stack</option>
        <option value="role">Role</option>
        <option value="minBasePay">Min Base Pay</option>
      </select>
    </div>
  );
};

export default Filters;
// import React, { useState, useEffect, useRef, useCallback } from "react";
// import JobCard from "./JobCard";

// export const Home = () => {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [filters, setFilters] = useState({
//     role: "",
//     company: "",
//     location: "",
//     minExperience: "",
//     remote: "all",
//   });

//   const observer = useRef();

//   const lastJobRef = useCallback(
//     (node) => {
//       if (loading) return;

//       if (observer.current) observer.current.disconnect();
//       observer.current = new IntersectionObserver((entries) => {
//         if (entries[0].isIntersecting) {
//           handleLoadMore();
//         }
//       });
//       if (node) observer.current.observe(node);
//     },
//     [loading]
//   );

//   const fetchJobs = async (offset) => {
//     setLoading(true);
//     const response = await fetch(
//       "https://api.weekday.technology/adhoc/getSampleJdJSON",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           limit: 10,
//           offset: offset,
//         }),
//       }
//     );
//     const data = await response.json();

//     if (Array.isArray(data.jdList)) {
//       setJobs((prevJobs) => [...prevJobs, ...data.jdList]);
//     } else if (data.jdList) {
//       setJobs((prevJobs) => [...prevJobs, data.jdList]);
//     } else {
//       console.error("Invalid data format:", data);
//     }

//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchJobs(0); // Initial load
//   }, []);

//   const handleLoadMore = () => {
//     fetchJobs(jobs.length);
//   };

//   const handleFilterChange = (name, value) => {
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [name]: value,
//     }));
//   };

//   const applyFilters = () => {
//     let filteredJobs = [...jobs];

//     // Apply filters for each section independently
//     if (filters.role !== "") {
//       filteredJobs = filteredJobs.filter((job) =>
//         job.jobRole.toLowerCase().includes(filters.role.toLowerCase())
//       );
//     }

//     if (filters.company !== "") {
//       filteredJobs = filteredJobs.filter((job) =>
//         job.companyName.toLowerCase().includes(filters.company.toLowerCase())
//       );
//     }

//     if (filters.location !== "") {
//       filteredJobs = filteredJobs.filter((job) =>
//         job.location.toLowerCase().includes(filters.location.toLowerCase())
//       );
//     }

//     if (filters.minExperience !== "") {
//       filteredJobs = filteredJobs.filter(
//         (job) => job.minExp >= parseInt(filters.minExperience)
//       );
//     }

//     if (filters.remote !== "all") {
//       filteredJobs = filteredJobs.filter((job) =>
//         filters.remote === "remote" ? job.location === "remote" : true
//       );
//     }

//     setJobs(filteredJobs);
//   };

//   const resetFilters = () => {
//     setFilters({
//       role: "",
//       company: "",
//       location: "",
//       minExperience: "",
//       remote: "all",
//     });
//     fetchJobs(0); // Reset jobs to initial state
//   };

//   const chunkArray = (arr, size) => {
//     return arr.reduce(
//       (acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]),
//       []
//     );
//   };

//   const chunkedJobs = chunkArray(jobs, 3);

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-3">
//           <input
//             type="text"
//             className="form-control mb-2"
//             placeholder="Search by Job Role"
//             value={filters.role}
//             onChange={(e) => handleFilterChange("role", e.target.value)}
//           />
//         </div>
//         <div className="col-md-3">
//           <input
//             type="text"
//             className="form-control mb-2"
//             placeholder="Search by Company Name"
//             value={filters.company}
//             onChange={(e) => handleFilterChange("company", e.target.value)}
//           />
//         </div>
//         <div className="col-md-3">
//           <input
//             type="text"
//             className="form-control mb-2"
//             placeholder="Search by Location"
//             value={filters.location}
//             onChange={(e) => handleFilterChange("location", e.target.value)}
//           />
//         </div>
//         <div className="col-md-2">
//           <select
//             className="form-control mb-2"
//             value={filters.minExperience}
//             onChange={(e) =>
//               handleFilterChange("minExperience", e.target.value)
//             }
//           >
//             <option value="">Select Min Experience</option>
//             {[...Array(15).keys()].map((num) => (
//               <option key={num + 1} value={num + 1}>
//                 {num + 1} years
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="col-md-1">
//           <select
//             className="form-control mb-2"
//             value={filters.remote}
//             onChange={(e) => handleFilterChange("remote", e.target.value)}
//           >
//             <option value="all">All</option>
//             <option value="remote">Remote</option>
//             <option value="onsite">On-site</option>
//           </select>
//         </div>
//         <div className="col-md-12 text-center">
//           <button className="btn btn-primary mr-2" onClick={applyFilters}>
//             Search Jobs
//           </button>
//           <button className="btn btn-secondary" onClick={resetFilters}>
//             Reset Filters
//           </button>
//         </div>
//       </div>
//       <div className="row">
//         {chunkedJobs.map((group, index) => (
//           <div key={index} className="col-md-4">
//             {group.map((job, i) => (
//               <JobCard key={job.jdUid} job={job} />
//             ))}
//           </div>
//         ))}
//       </div>
//       {loading && <p>Loading...</p>}
//       {!loading && (
//         <div className="text-center">
//           <button onClick={handleLoadMore} className="btn btn-primary">
//             Load More
//           </button>
//         </div>
//       )}
//       <div ref={lastJobRef}></div>
//     </div>
//   );
// };
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
        }),
      }
    );
    const data = await response.json();

    if (Array.isArray(data.jdList)) {
      setJobs(data.jdList); // Update jobs directly without appending
    } else if (data.jdList) {
      setJobs([data.jdList]); // Wrap single object in an array
    } else {
      console.error("Invalid data format:", data);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchJobs(0); // Initial load
  }, []);

  const handleLoadMore = () => {
    fetchJobs(jobs.length);
  };

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const applyFilters = () => {
    fetchJobs(0); // Fetch jobs with updated filters
  };

  const resetFilters = () => {
    setFilters({
      role: "",
      company: "",
      location: "",
      minExperience: "",
      remote: "all",
    });
    fetchJobs(0); // Reset jobs to initial state
  };

  const filterJobs = (job) => {
    const { role, company, location, minExperience, remote } = filters;

    // Check if the job meets all filter criteria
    return (
      job.jobRole.toLowerCase().includes(role.toLowerCase()) &&
      job.companyName.toLowerCase().includes(company.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase()) &&
      (minExperience === "" || job.minExp >= parseInt(minExperience)) &&
      (remote === "all" || (remote === "remote" && job.location === "remote"))
    );
  };

  const filteredJobs = jobs.filter(filterJobs);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Search by Job Role"
            value={filters.role}
            onChange={(e) => handleFilterChange("role", e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Search by Company Name"
            value={filters.company}
            onChange={(e) => handleFilterChange("company", e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Search by Location"
            value={filters.location}
            onChange={(e) => handleFilterChange("location", e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <select
            className="form-control mb-2"
            value={filters.minExperience}
            onChange={(e) =>
              handleFilterChange("minExperience", e.target.value)
            }
          >
            <option value="">Select Min Experience</option>
            {[...Array(15).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1} years
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-1">
          <select
            className="form-control mb-2"
            value={filters.remote}
            onChange={(e) => handleFilterChange("remote", e.target.value)}
          >
            <option value="all">All</option>
            <option value="remote">Remote</option>
            <option value="onsite">On-site</option>
          </select>
        </div>
        <div className="col-md-12 text-center">
          <button className="btn btn-secondary" onClick={resetFilters}>
            Reset Filters
          </button>
          <button onClick={applyFilters} className="btn btn-primary">
            Search Jobs
          </button>
        </div>
      </div>
      <div className="row">
        {filteredJobs.map((job) => (
          <div key={job.jdUid} className="col-md-4">
            <JobCard job={job} />
          </div>
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {!loading && (
        <div className="text-center">
          <button onClick={handleLoadMore} className="btn btn-primary">
            Load More
          </button>
        </div>
      )}
      <div ref={lastJobRef}></div>
    </div>
  );
};
