import React from 'react';
import Search from '../../atoms/Input/Search';
import KeywordBlock from './KeywordBlock';


const SearchBlock = () => {
    return (
      <React.Fragment>
				<div className="block-search">					
					<Search />
					<KeywordBlock />
				</div>
			</React.Fragment>
    );
};

export default SearchBlock;