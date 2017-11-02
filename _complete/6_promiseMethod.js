const request = require("request");

new Promise((resolve, reject) => {
  return request(
    "http://maps.googleapis.com/maps/api/geocode/json?address=321%20i%20st%20davis",
    (err, res, body) => {
      if (err) {
        reject(err);
        return err;
      }
      resolve(JSON.parse(body).results[0].geometry.location);
    }
  );
})
  .then(res => {
    const {lat, lng} = res;
    return new Promise((resolve, reject) => {
      request(
        `https://api.darksky.net/forecast/6fb416a8313aabd902a22558e07cc032/${lat},${lng}`,
        (err, res, body) => {
          if (err) {
            reject(err);
            return err;
          }
          resolve(JSON.parse(body));
        }
      );
    });
  })
  .then(res => {
    const currentTemp = res.currently.temperature;
    const feelTemp = res.currently.apparentTemperature;
    const temps = {currentTemp, feelTemp};
    return new Promise((resolve, reject) => {
      request(
        "http://ron-swanson-quotes.herokuapp.com/v2/quotes",
        (err, res, body) => {
          if (err) {
            reject(err);
            return err;
          }
          resolve({temps, body});
        }
      );
    });
  })
  .then(res => {
    console.log(
      `Today's weather is ${res.temps.currentTemp}, and it feels like ${res
        .temps
        .feelTemp}! \nAnd here is your stupid quote of the day: \n${JSON.parse(
        res.body
      )[0]}`
    );
  })
  .catch(err => {
    console.log(err);
  });
