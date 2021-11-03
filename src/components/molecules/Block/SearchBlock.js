import React from 'react';
import SearchBoxBlock from './SearchBoxBlock';
import KeywordBlock from './KeywordBlock';
import '../../../components/atoms/Button/Button.css';

const SearchBlock = () => {
    return (
      <React.Fragment>
				<div className="block-search">
          <SearchBoxBlock />
					<KeywordBlock />
				</div>
			</React.Fragment>
    );
};

export default SearchBlock;