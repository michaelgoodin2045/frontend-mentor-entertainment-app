import React, { useContext } from 'react';
import User from './User';
import logo from '../assets/logo.svg';
import { MdLocalMovies, MdTv, MdOutlineBookmark } from 'react-icons/md';
import { IoGrid } from 'react-icons/io5';
import DataContext from '../Contexts/DataContext';

const Menu = () => {
  const { items, setFiltered, setIsActive, isActive, bookmarked } =
    useContext(DataContext);

  const handleAll = () => {
    const results = items.filter((item) => !item.isTrending);
    setFiltered(results);
    setIsActive('all');
  };

  const handleMovies = () => {
    const results = items.filter((item) => item.category === 'Movie');
    setFiltered(results);
    setIsActive('movie');
  };

  const handleTv = () => {
    const results = items.filter((item) => item.category === 'TV Series');
    setFiltered(results);
    setIsActive('tv');
  };

  const handleBookmarked = () => {
    const results = bookmarked;
    setFiltered(results);
    setIsActive('bookmarked');
  };

  return (
    <div className="menu">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="filters">
        <div onClick={handleAll} className="filter-btn">
          <IoGrid
            className={`filter-icon ${isActive === 'all' ? 'active' : ''}`}
          />
        </div>
        <div onClick={handleMovies} className="filter-btn">
          <MdLocalMovies
            className={`filter-icon ${isActive === 'movie' ? 'active' : ''}`}
          />
        </div>
        <div onClick={handleTv} className="filter-btn">
          <MdTv className={`filter-icon ${isActive === 'all' ? 'tv' : ''}`} />
        </div>
        <div onClick={handleBookmarked} className="filter-btn">
          <MdOutlineBookmark
            className={`filter-icon ${
              isActive === 'bookmarked' ? 'active' : ''
            }`}
          />
        </div>
      </div>
      <User />
    </div>
  );
};

export default Menu;
