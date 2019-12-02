import React from 'react';
import Clock from 'react-icons/lib/fa/clock-o';

const Duration = ({ duration }) => {
  return (
    <div>
      <Clock color="#fff" className="ml-3"/>
      <span>{duration}</span>
      <span>hrs</span>
    </div>
  );
};

export default Duration;