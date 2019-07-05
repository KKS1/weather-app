import React, { useState } from 'react';

function InputForm(props) {
  const [city, setCity] = useState('');

  const cityChangeHandler = event => {
    setCity(event.target.value);
  };

  const onFormSubmit = event => {
    event.preventDefault();
    props.onWeatherReq({ city: city });
  };

  return (
    <form className="my-2" method="post" onSubmit={onFormSubmit}>
      <div className="form-group">
        <label htmlFor="cityInput">React Conf City</label>
        <input
          type="text"
          className="form-control"
          id="cityInput"
          name="city"
          aria-describedby="city Input"
          placeholder="Enter city"
          onChange={cityChangeHandler}
        />
        <small id="cityInputHelp" className="form-text text-muted">
          Enter the city you want weather for.
        </small>
      </div>
      <button type="submit" className="btn btn-primary">
        Get Weather
      </button>
    </form>
  );
}

export default InputForm;
