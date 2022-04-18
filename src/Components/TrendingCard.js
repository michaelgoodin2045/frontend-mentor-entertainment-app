import React, { useContext, useState } from 'react';
import {
  MdLocalMovies,
  MdTv,
  MdBookmark,
  MdBookmarkBorder,
  MdPlayCircle,
} from 'react-icons/md';
import MediaQuery from 'react-responsive';
import DataContext from '../Contexts/DataContext';

const TrendingCard = ({ item }) => {
  const { addBookmark, removeBookmark, ifBookmarked } = useContext(DataContext);
  const [opacityPlay, setOpacityPlay] = useState('0');

  const opacityStyle = {
    opacity: `${opacityPlay}`,
    zIndex: '10',
  };

  return (
    <>
      <div
        className="item-img"
        onMouseEnter={() => setOpacityPlay('1')}
        onMouseLeave={() => setOpacityPlay('0')}
      >
        <MediaQuery maxWidth={739}>
          <img src={item.thumbnail.trending.small} alt="" />
        </MediaQuery>
        <MediaQuery minWidth={740}>
          <img src={item.thumbnail.trending.large} alt="" />
        </MediaQuery>
        <div className="play-box" style={opacityStyle}>
          <div className="play-circle">
            <MdPlayCircle />
          </div>
          <div className="play-text">
            <p>Play</p>
          </div>
        </div>
      </div>

      <div className="bookmark-box">
        <div
          className="bookmark-icon"
          onClick={() =>
            ifBookmarked(item) ? removeBookmark(item) : addBookmark(item)
          }
        >
          {ifBookmarked(item) ? <MdBookmark /> : <MdBookmarkBorder />}
        </div>
      </div>
      <div className="item-info">
        <div className="top-row">
          <div className="item-year">
            <h4>{item.year}</h4>
          </div>
          <div className="item-category">
            <div className="category-icon">
              {item.category === 'Movie' ? <MdLocalMovies /> : <MdTv />}
            </div>
            <div className="category-name">
              <h4>{item.category}</h4>
            </div>
          </div>
          <div className="item-rating">
            <h4>{item.rating}</h4>
          </div>
        </div>
        <div className="bottom-row">
          <div className="item-title">
            <h3>{item.title}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingCard;
