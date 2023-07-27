"use client";
import { FC } from "react";
import { DrugSearchContext } from "../DrugSearchProvider/DrugSearchProvider";
import React from "react";
import Drug from "@/models/Drug";
import DrugItem from "../DrugItem/DrugItem";

const DrugSearchTable: FC = () => {
  const { searchResults } = React.useContext(DrugSearchContext);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Medication</th>
          <th scope="col">Cost</th>
          <th scope="col">Prescribe</th>
        </tr>
      </thead>
      <tbody>
        {searchResults.map((drug: Drug) => (
          <DrugItem
            medicationName={drug.medicationName}
            cost={formatter.format(Number(drug.unitPrice))}
            drugId={drug.drugId}
            key={drug.drugId}
          />
        ))}
      </tbody>
    </table>
  );
};

export default DrugSearchTable;
