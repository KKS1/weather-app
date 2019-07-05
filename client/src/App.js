import React, { useState } from 'react';
import axios from 'axios';

import InputForm from './InputForm';
import Result from './Result';

function App(props) {
  const [weatherData, setWeatherData] = useState({});

  const weatherReqHandler = async (postData = {}) => {
    try {
      const respData = await axios.post(
        'http://localhost:3001/get-weather',
        postData
      );
      setWeatherData(respData.data);
    } catch (err) {
      setWeatherData({
        error: 'Something went wrong. Please try again later!'
      });
    }
  };

  return (
    <div className="container">
      <InputForm onWeatherReq={weatherReqHandler} />
      <Result weatherData={weatherData} />
    </div>
  );
}

export default App;
