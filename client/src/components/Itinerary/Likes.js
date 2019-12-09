import React from 'react';
import Heart from 'react-icons/lib/fa/heart-o';
import IconButton from './IconButton';

const Likes =  props  => {
  console.log("puto",props);
  return (
    <div>
    <IconButton/>
    
      {/* <span className=" text-white ml-2">{likes}</span> */}
    </div>
  );
};

export default Likes;