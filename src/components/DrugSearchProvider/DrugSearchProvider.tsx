"use client";
import Drug from "@/models/Drug";
import PrescriptionFormModel from "@/models/PrescriptionForm";
import React, { PropsWithChildren } from "react";

type DrugSearchContextType = {
  searchResults: Drug[];
  setSearchResults: Function;
  setDrug: Function;
  drug: Drug;
};
export const DrugSearchContext = React.createContext<DrugSearchContextType>({
  searchResults: [],
  setSearchResults: Function,
  setDrug: Function,
  drug: {} as Drug,
});

const DrugSearchProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const [searchResults, setSearchResults] = React.useState<any>([]);
  const [drug, setDrug] = React.useState<any>({});
  const value = {
    searchResults,
    setSearchResults,
    drug,
    setDrug,
  };
  return (
    <DrugSearchContext.Provider value={value}>
      {children}
    </DrugSearchContext.Provider>
  );
};

export default DrugSearchProvider;
