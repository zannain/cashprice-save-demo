"use client";
import Drug from "@/models/Drug";
import React, { PropsWithChildren } from "react";

type DrugSearchContextType = {
  searchResults: Drug[];
  setSearchResults: Function;
};
export const DrugSearchContext = React.createContext<DrugSearchContextType>({
  searchResults: [],
  setSearchResults: Function,
});

const DrugSearchProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const [searchResults, setSearchResults] = React.useState<any>([]);
  const value = { searchResults, setSearchResults };
  return (
    <DrugSearchContext.Provider value={value}>
      {children}
    </DrugSearchContext.Provider>
  );
};

export default DrugSearchProvider;
