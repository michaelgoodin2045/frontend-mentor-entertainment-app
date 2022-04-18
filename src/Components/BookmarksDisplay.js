import React, { useContext } from 'react';
import DataContext from '../Contexts/DataContext';
import Card from './Card';

const BookmarksDisplay = ({ title }) => {
  const { filtered, search, bookmarked } = useContext(DataContext);
  return (
    <>
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="item-container">
        {bookmarked
          .filter((item) => item.category === 'Movie')
          .map((item, index) => {
            return <Card key={index} item={item} />;
          })}
      </div>
      <div className={`title last ${search ? 'close' : ''}`}>
        {filtered.filter((item) => item.category === 'TV Series').length > 0 ? (
          <h2>Bookmarked TV Series</h2>
        ) : (
          ''
        )}
      </div>
      <div className="item-container">
        {bookmarked
          .filter((item) => item.category === 'TV Series')
          .map((item, index) => {
            return <Card key={index} item={item} />;
          })}
      </div>
    </>
  );
};

export default BookmarksDisplay;
