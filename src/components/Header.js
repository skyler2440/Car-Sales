import React from 'react';
import {initialState} from '../reducers'
const Header = () => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={initialState.car.image} alt={initialState.car.name} />
      </figure>
      <h2>{initialState.car.name}</h2>
      <p>Amount: ${initialState.car.price}</p>
    </>
  );
};

export default Header;
