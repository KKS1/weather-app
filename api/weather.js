const axios = require('axios');

const weatherApiKey = '24ccd5014c50affa3871f721e85e9020';

exports.getWeather = async ({ city }) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${weatherApiKey}`;
  try {
    const reponse = await axios.get(url);
    return reponse.data;
  } catch (error) {
    console.log(error);
  }
  return;
};
