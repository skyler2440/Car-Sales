import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {initialState} from '../reducers'
const AdditionalFeatures = () => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {initialState.store.length ? (
        <ol type="1">
          {initialState.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
