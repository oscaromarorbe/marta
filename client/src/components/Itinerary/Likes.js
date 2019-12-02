import React from 'react';
import Heart from 'react-icons/lib/fa/heart-o';

const Likes = ({ likes }) => {
  return (
    <div>
      <Heart color="#fff" className="ml-3"/>
      <span>{likes}</span>
    </div>
  );
};

export default Likes;