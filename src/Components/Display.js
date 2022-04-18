import React, { useContext, useEffect, useState } from 'react';
import DataContext from '../Contexts/DataContext';
import BookmarksDisplay from './BookmarksDisplay';
import FilteredDisplay from './FilteredDisplay';
import RecommendedDisplay from './RecommendedDisplay';

const Display = () => {
  const { filtered, isActive, search, searchFilter } = useContext(DataContext);
  const [recommended, setRecommended] = useState(filtered);
  const [viewAllSearch, setViewAllSearch] = useState(true);
  const [title, setTitle] = useState('Recommended for you');
  const [viewResults, setViewResults] = useState('results');

  const i = searchFilter.length;

  useEffect(() => {
    if (isActive === 'all') {
      const displayNoTrending = filtered.filter((item) => !item.isTrending);
      setRecommended(displayNoTrending);
    }
  }, [filtered, isActive]);

  useEffect(() => {
    if (isActive !== 'all' || search) {
      setViewAllSearch(true);
    } else {
      setViewAllSearch(false);
    }
  }, [isActive, search]);

  useEffect(() => {
    if (i === 1) {
      setViewResults('result');
    } else {
      setViewResults('results');
    }
  }, [viewResults, i]);

  useEffect(() => {
    if (isActive === 'movie') {
      setTitle('Movies');
    }
    if (isActive === 'tv') {
      setTitle('TV Series');
    }
    if (
      isActive === 'bookmarked' &&
      filtered.filter((item) => item.category === 'Movie').length > 0
    ) {
      setTitle('Bookmarked Movies');
    }
    if (
      isActive === 'bookmarked' &&
      filtered.filter((item) => item.category === 'Movie').length === 0
    ) {
      setTitle(null);
    }
    if (isActive === 'all') {
      setTitle('Recommended for you');
    }
    if (search) {
      setTitle(`Found ${i} ${viewResults} for '${search}'`);
    }
  }, [title, isActive, search, i, viewResults, filtered]);

  return (
    <div className="display">
      {isActive !== 'bookmarked' ? (
        <>
          <div className="title">
            <h2>{title}</h2>
          </div>
          <div className="item-container">
            {viewAllSearch ? (
              <FilteredDisplay />
            ) : (
              <RecommendedDisplay recommended={recommended} />
            )}
          </div>
        </>
      ) : (
        <>
          <BookmarksDisplay title={title} />
        </>
      )}
    </div>
  );
};

export default Display;
