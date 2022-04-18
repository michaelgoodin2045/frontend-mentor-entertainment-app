import React, { createContext, useState, useEffect } from 'react';
import data from '../data/data.json';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [isActive, setIsActive] = useState('all');
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [viewTrending, setViewTrending] = useState(true);
  const getBookmarked = JSON.parse(
    localStorage.getItem('bookmarked-programs') || '[]'
  );
  const [bookmarked, setBookmarked] = useState(getBookmarked);

  useEffect(() => {
    setItems(data);
    setFiltered(data);
  }, []);

  const saveToLocalStorage = (programs) => {
    localStorage.setItem('bookmarked-programs', JSON.stringify(programs));
  };

  const addBookmark = (program) => {
    setBookmarked([...bookmarked, program]);
    saveToLocalStorage([...bookmarked, program]);
  };

  const removeBookmark = (program) => {
    const newBookmarkList = bookmarked.filter(
      (bookmark) => bookmark.title !== program.title
    );
    setBookmarked(newBookmarkList);
    saveToLocalStorage(newBookmarkList);
  };

  const ifBookmarked = (program) => {
    if (
      bookmarked.filter((bookmark) => bookmark.title === program.title).length >
      0
    ) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (search || isActive !== 'all') {
      setViewTrending(false);
    } else {
      setViewTrending(true);
    }
  }, [search, isActive, viewTrending]);

  const searchFilter = items.filter((item) =>
    item.title.toLowerCase().includes(search)
  );

  return (
    <DataContext.Provider
      value={{
        items,
        setItems,
        filtered,
        setFiltered,
        isActive,
        setIsActive,
        search,
        setSearch,
        query,
        setQuery,
        viewTrending,
        setViewTrending,
        bookmarked,
        setBookmarked,
        addBookmark,
        removeBookmark,
        ifBookmarked,
        searchFilter,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
