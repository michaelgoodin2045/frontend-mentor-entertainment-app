import React, { useContext, useEffect, useRef } from 'react';
import TrendingCard from './TrendingCard';
import { motion } from 'framer-motion';
import DataContext from '../Contexts/DataContext';

const Trending = ({ width, setWidth }) => {
  const { items } = useContext(DataContext);

  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  });

  const trendingItems = items.filter((item) => item.isTrending);

  return (
    <div className="trending">
      <div className="title">
        <h2>Trending</h2>
      </div>
      <motion.div
        className="carousel"
        ref={carousel}
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {trendingItems.map((item, index) => {
            return (
              <motion.div key={index} className="trending-item">
                <TrendingCard item={item} />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Trending;
