"use client";
import { FC } from "react";
import { DrugSearchContext } from "../DrugSearchProvider/DrugSearchProvider";
import React from "react";
import Drug from "@/models/Drug";
import DrugItem from "../DrugItem/DrugItem";

const DrugSearchTable: FC = () => {
  const { searchResults } = React.useContext(DrugSearchContext);
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover table-bordered align-middle">
        <thead className="table-dark">
          <tr>
            <th className="w-25" scope="col">
              Medication
            </th>
            <th className="w-25" scope="col">
              Brand
            </th>
            <th className="w-25" scope="col">
              Cost
            </th>
            <th className="w-25" scope="col">
              Source
            </th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {searchResults?.map((drug: Drug) => (
            <DrugItem drug={drug} key={drug.drugId} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DrugSearchTable;
