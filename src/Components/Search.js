import React, { useContext, useEffect, useState } from 'react';
import { CgSearch } from 'react-icons/cg';
import DataContext from '../Contexts/DataContext';

const Search = () => {
  const { isActive, search, setSearch, setQuery } = useContext(DataContext);
  const [placeholder, setPlaceholder] = useState(
    'Search for movies or TV series'
  );
  const updateSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const getSearch = (e) => {
    e.preventDefault(e);
    setQuery(search);
  };

  useEffect(() => {
    if (isActive === 'movie') {
      setPlaceholder('Search for movies');
    }
    if (isActive === 'tv') {
      setPlaceholder('Search for TV series');
    }
    if (isActive === 'bookmarked') {
      setPlaceholder('Search for bookmarked shows');
    }
    if (isActive === 'all') {
      setPlaceholder('Search for movies or TV series');
    }
  }, [isActive]);

  return (
    <div className="search">
      <form>
        <button type="submit" onSubmit={getSearch}>
          <CgSearch className="search-icon" />
        </button>
        <input type="text" onChange={updateSearch} placeholder={placeholder} />
      </form>
    </div>
  );
};

export default Search;
