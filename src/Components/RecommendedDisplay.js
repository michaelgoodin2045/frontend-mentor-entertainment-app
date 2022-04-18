import React from 'react';
import Card from './Card';

const RecommendedDisplay = ({ recommended }) => {
  return (
    <>
      {recommended.map((item, index) => {
        return <Card key={index} item={item} />;
      })}
    </>
  );
};

export default RecommendedDisplay;
