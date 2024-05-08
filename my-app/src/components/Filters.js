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
