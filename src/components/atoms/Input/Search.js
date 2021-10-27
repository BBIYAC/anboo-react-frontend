import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
	return (
		<React.Fragment>
			<FaSearch className="search-icon" />
			<input className="searchBox" type="text" placeholder="검색어를 입력하세요..."></input>
		</React.Fragment>
	);
};

export default Search;