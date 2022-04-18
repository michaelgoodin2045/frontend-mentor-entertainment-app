import React, { useContext, useState } from 'react';
import Display from './Display';
import Menu from './Menu';
import Search from './Search';
import Trending from './Trending';
import DataContext from '../Contexts/DataContext';

const Home = () => {
  const { viewTrending } = useContext(DataContext);
  const [width, setWidth] = useState(0);

  return (
    <div className="home">
      <Menu />
      <div className="home-display">
        <Search />
        {viewTrending ? <Trending width={width} setWidth={setWidth} /> : null}
        <Display />
      </div>
    </div>
  );
};

export default Home;
