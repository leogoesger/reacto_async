const rp = require("request-promise");

const asyncMethod = async () => {
  try {
    const locationRes = await rp(
      "http://maps.googleapis.com/maps/api/geocode/json?address=321%20i%20st%20davis"
    );
    const {lat, lng} = JSON.parse(locationRes).results[0].geometry.location;
    const weatherRes = await rp(
      `https://api.darksky.net/forecast/6fb416a8313aabd902a22558e07cc032/${lat},${lng}`
    );
    const {temperature, apparentTemperature} = JSON.parse(weatherRes).currently;
    const quoteRes = await rp(
      "http://ron-swanson-quotes.herokuapp.com/v2/quotes"
    );
    console.log(
      `Today's weather is ${temperature}, and it feels like ${apparentTemperature}!`
    );
    console.log(
      `And here is your stupid quote of the day: \n${JSON.parse(quoteRes)}`
    );
  } catch (e) {
    console.log(e);
  }
};

asyncMethod();
