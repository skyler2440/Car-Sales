import React from "react";

import AddedFeature from "./AddedFeature";
import { initialState } from "../reducers";
const AddedFeatures = () => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {initialState.car.features.length ? (
        <ol type="1">
          {initialState.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
