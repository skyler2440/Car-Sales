import React from 'react';
import {initialState} from '../reducers'
const Total = () => {
  return (
    <div className="content">
      <h4>Total Amount: ${initialState.car.price + initialState.additionalPrice}</h4>
    </div>
  );
};

export default Total;
