import React from 'react';
import {addFeature} from '../actions'
import {connect} from 'react-redux'
const AdditionalFeature = ({feature, addFeature}) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => addFeature(feature)}>Add</button>
      {feature.name} (+{feature.price})
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
export default connect(mapStateToProps, {addFeature})(AdditionalFeature);
