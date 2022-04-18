import React, { useContext } from 'react';
import DataContext from '../Contexts/DataContext';
import Card from './Card';

const FilteredDisplay = () => {
  const { filtered, search, searchFilter } = useContext(DataContext);
  return (
    <>
      {!search
        ? filtered.map((item, index) => {
            return <Card key={index} item={item} />;
          })
        : searchFilter.map((item, index) => {
            return <Card key={index} item={item} />;
          })}
    </>
  );
};

export default FilteredDisplay;
