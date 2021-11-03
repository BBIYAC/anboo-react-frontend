import React from 'react';
import Search from '../../atoms/Input/Search';
import SearchIcon from '../../atoms/Button/SearchIcon';
import '../../../components/atoms/Button/Button.css';

const SearchBoxBlock = () => {
    return (
      <React.Fragment>
        <div className="box-search">
          <Search />
          <SearchIcon/>
        </div>
			</React.Fragment>
    );
};

export default SearchBoxBlock;
