// Function 1
const items = [1, 2, 3, 4];
const callbackFunc = item => {
  console.log("Hello world" + item);
};
items.forEach(item => callbackFunc(item));

// *****************************************************************

// Function 2
const request = require("request");
request(
  "https://api.chucknorris.io/jokes/random?category=food",
  (err, res, body) => {
    if (err) {
      console.log(err);
    }
    console.log(JSON.parse(body).value);
  }
);
