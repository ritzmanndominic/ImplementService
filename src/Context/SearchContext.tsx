import "bootstrap/dist/css/bootstrap.min.css";
import {createContext, FC, useState } from "react";

export type SearchContextState = {
  search: string;
  searchProduct: (name: string) => void;
};

const contextDefaultValues: SearchContextState = {
  search: "",
  searchProduct: () => {},
};

export const SearchContext =
  createContext<SearchContextState>(contextDefaultValues);

const SearchProvider: FC = ({ children }) => {
  const [search, setSearch] = useState(contextDefaultValues.search);
  const searchProduct = (newSearch: string) => setSearch(newSearch);
  return (
    <SearchContext.Provider value={{ search, searchProduct }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
