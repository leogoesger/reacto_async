const request = require("request");

request(
  "http://maps.googleapis.com/maps/api/geocode/json?address=321%20i%20st%20davis",
  (err, res, body) => {
    if (err) {
      console.log(err);
      return;
    }
    const {lat, lng} = JSON.parse(body).results[0].geometry.location.lat;
    request(
      `https://api.darksky.net/forecast/6fb416a8313aabd902a22558e07cc032/${lat},${lng}`,
      (err, res, body2) => {
        if (err) {
          console.log(err);
          return;
        }
        request(
          "http://ron-swanson-quotes.herokuapp.com/v2/quotes",
          (err, res, body) => {
            if (err) {
              console.log(err);
              return;
            }
            console.log(
              `Today's weather is ${JSON.parse(body2).currently
                .temperature}, and it feels like ${JSON.parse(body2).currently
                .apparentTemperature}! \nAnd here is your stupid quote of the day: \n${JSON.parse(
                body
              )[0]}`
            );
          }
        );
      }
    );
  }
);
