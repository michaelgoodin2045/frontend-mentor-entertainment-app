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

const Card = ({ item }) => {
  const { trending, addBookmark, removeBookmark, ifBookmarked } =
    useContext(DataContext);
  const [playBtn, setPlayBtn] = useState(false);
  const handlePlay = () => {
    setPlayBtn(!playBtn);
  };

  return (
    <div className="card">
      <div
        className="item-img"
        onMouseEnter={handlePlay}
        onMouseLeave={handlePlay}
      >
        {!trending ? (
          <>
            {' '}
            <MediaQuery maxWidth={739}>
              <img src={item.thumbnail.regular.small} alt="program" />
            </MediaQuery>
            <MediaQuery minWidth={740}>
              <img src={item.thumbnail.regular.large} alt="program" />
            </MediaQuery>
          </>
        ) : (
          <>
            <MediaQuery maxWidth={739}>
              <img src={item.thumbnail.trending.small} alt="program" />
            </MediaQuery>
            <MediaQuery minWidth={740}>
              <img src={item.thumbnail.trending.large} alt="program" />
            </MediaQuery>
          </>
        )}
        {playBtn ? (
          <div className="play-box">
            <div className="play-circle">
              <MdPlayCircle />
            </div>
            <div className="play-text">
              <p>Play</p>
            </div>
          </div>
        ) : (
          ''
        )}
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
            <h3 className="small-font-display">{item.title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
