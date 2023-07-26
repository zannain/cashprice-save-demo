"use client";
import { FC } from "react";
import { DrugSearchContext } from "../DrugSearchProvider/DrugSearchProvider";
import React from "react";

const DrugSearchTable: FC = () => {
  const { searchResults } = React.useContext(DrugSearchContext);
  console.log(searchResults);
  return <table className="table"></table>;
};

export default DrugSearchTable;
