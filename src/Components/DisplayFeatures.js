import React from 'react';

function DisplayFeatures(props) {
    let featuresList = props.features;
    return (
        <div className="features">
            {Object.keys(featuresList).map(index => <div key={featuresList[index]}>{featuresList[index]}</div>)}
        </div>
    )
}

export default DisplayFeatures;