import React from 'react';

export const Menu = ({ MENUImg, MENULine, MENULine1, className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <img src={`/GameCard-Project/assets/${MENULine1}`} alt="Line 1" />
      <img src={`/GameCard-Project/assets/${MENULine}`} alt="Line 2" />
      <img src={`/GameCard-Project/assets/${MENUImg}`} alt="Image" />
    </div>
  );
};