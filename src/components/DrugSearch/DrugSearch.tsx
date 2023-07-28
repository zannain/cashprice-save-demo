"use client";
import React from "react";
import { DrugSearchContext } from "../DrugSearchProvider/DrugSearchProvider";

export default function DrugSearchForm() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const { setSearchResults } = React.useContext(DrugSearchContext);

  const handleDrugSearch = async (): Promise<void> => {
    try {
      const response = await fetch(`api/drugSearch?drug=${searchTerm}`);
      const { data } = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setSearchResults([]);
    }
  };
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <form
          className="d-flex w-100"
          role="search"
          onSubmit={(event) => {
            event.preventDefault();
            handleDrugSearch();
          }}
        >
          <input
            className="form-control me-2 w-25"
            type="drugSearch"
            placeholder="Drug Search"
            aria-label="Drug Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="d-flex gap-3 w-25">
            <button className="btn btn-outline-success w-75" type="submit">
              Drug Search
            </button>
            <button
              type="button"
              className="btn btn-outline-danger w-75"
              onClick={(e) => {
                e.preventDefault();
                setSearchTerm("");
                setSearchResults([]);
              }}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </nav>
  );
}

// <form
// onSubmit={(event) => {
//   event.preventDefault();
//   handleDrugSearch();
// }}
// >
//   <div className="row m-3">
//     <div className="col-auto">
//       <label htmlFor="drugSearch" className="col-form-label">
//         Drug Search
//       </label>
//     </div>
//     <div className="col-auto">
//       <input
//         className="form-control"
//         type="text"
//         id="drugSearch"
//         name="drugSearch"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//     </div>
//     <div className="col-auto">
//       <button type="submit" className="btn btn-primary">
//         Submit
//       </button>
//     </div>
//     <div className="col-auto">
//       <button
//         type="button"
//         className="btn btn-danger"
//         onClick={(e) => {
//           e.preventDefault();
//           setSearchTerm("");
//           setSearchResults([]);
//         }}
//       >
//         Clear
//       </button>
//     </div>
//   </div>
// </form>
