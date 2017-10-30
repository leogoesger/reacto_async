const axios = require("axios");

axios
  .get(
    "http://maps.googleapis.com/maps/api/geocode/json?address=321%20i%20st%20davis"
  )
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
