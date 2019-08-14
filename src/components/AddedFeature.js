import React from 'react';
import { removeFeature } from '../actions';
import {connect} from 'react-redux'
const AddedFeature = (props) => {
  console.log("TCL: AddedFeature -> props", props)
  // console.log("TCL: AddedFeature -> feature", feature)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => removeFeature(props)}>X</button>
      {props.feature} (+{props.price})
    </li>
  );
};
const mapStateToProps = state => {
  console.log("TCL: state", state)
    return{
    name: state.car.features,
    price: state.additionalPrice,
  }
  }
  export default connect(mapStateToProps, {removeFeature})(AddedFeature)
