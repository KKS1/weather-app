import React from 'react';

function Result(props) {
  const { weather, error } = props.weatherData || {};
  const classSuffix = weather ? 'info' : error ? 'warning' : '';
  return (
    <div className="result-container">
      {weather || error ? (
        <div className={`alert alert-${classSuffix}`} role="alert">
          {weather || ''} {error || ''}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default Result;
