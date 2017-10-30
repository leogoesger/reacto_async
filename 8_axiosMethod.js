const axios = require("axios");

axios
  .get(
    "http://maps.googleapis.com/maps/api/geocode/json?address=321%20i%20st%20davis"
  )
  .then(res => {
    const {lat, lng} = res.data.results[0].geometry.location;
    return axios.get(
      `https://api.darksky.net/forecast/6fb416a8313aabd902a22558e07cc032/${lat},${lng}`
    );
  })
  .then(res => {
    const {temperature, apparentTemperature} = res.data.currently;
    console.log(
      `Today's weather is ${temperature}, and it feels like ${apparentTemperature}!`
    );
    return axios.get("http://ron-swanson-quotes.herokuapp.com/v2/quotes");
  })
  .then(res => {
    console.log(`And here is your stupid quote of the day: \n${res.data[0]}`);
  })
  .catch(err => {
    console.log(err);
  });
