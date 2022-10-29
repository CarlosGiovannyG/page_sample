import React, { useContext } from "react";
import { SearchContext } from "./SearchProvider";

const useSearch = () => {
  const contextValue = useContext(SearchContext);
  return contextValue;
};

export default useSearch;
