import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchIcon = () => {
  return(
    <React.Fragment>
      <button className="search-icon"><FaSearch size="20" color="var(--color-dark-gray)"/></button>
    </React.Fragment>
  );
};

export default SearchIcon;