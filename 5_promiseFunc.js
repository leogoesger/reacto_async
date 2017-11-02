const request = require("request");

const promiseExample = new Promise((resolve, reject) => {
  request(
    "https://api.chucknorris.io/jokes/random?category=food",
    (err, req, body) => {
      if (err) {
        reject("bad call!");
      }
      resolve(body);
    }
  );
});

promiseExample.then(
  res => {
    console.log(res);
  },
  err => {
    console.log(err);
  }
);
