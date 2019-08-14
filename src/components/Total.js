import React from 'react';
import {initialState} from '../reducers'
import {connect} from 'react-redux'
const Total = props => {
console.log("TCL: props", props)
  return (
    <div className="content">
      <h4>Total Amount: ${initialState.car.price + props.price}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("TCL: state", state)
    return{
    price: state.additionalPrice,
  }
  }
  export default connect(mapStateToProps, {})(Total);

