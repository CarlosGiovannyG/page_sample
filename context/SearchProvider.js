import { createContext } from "react";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
 console.log("Entro al contexto");
  const responseContext = () => {
    console.log("Entro al contexto");
    return;
  };

  const contextValue = { responseContext };

  return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>;
};

export default SearchProvider;
