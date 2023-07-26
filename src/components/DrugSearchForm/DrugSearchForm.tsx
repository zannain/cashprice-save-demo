"use client";
import React from "react";
import { DrugSearchContext } from "../DrugSearchProvider/DrugSearchProvider";

export default function DrugSearchForm() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const { setSearchResults } = React.useContext(DrugSearchContext);

  const handleDrugSearch = async (): Promise<void> => {
    const searchEndpoint = `https://enavvi-api.azurewebsites.net/CashPrice/Search?planGuid=CostPlusDrug&searchTerm=${searchTerm}`;

    try {
      const response = await fetch(searchEndpoint);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setSearchResults([]);
    }
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleDrugSearch();
      }}
    >
      <div className="row m-3">
        <div className="col-auto">
          <label htmlFor="drugSearch" className="col-form-label">
            Drug Search
          </label>
        </div>
        <div className="col-auto">
          <input
            className="form-control"
            type="text"
            id="drugSearch"
            name="drugSearch"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
