const request = require("request");

// Weather stack Api

const url =
  "http://api.weatherstack.com/current?access_key=69808d7dddadeb0437ae9d857d4b2604&query=18.51957,73.85535";

request({ url: url, json: true }, (error, response) => {
  // const data = JSON.parse(response.body);
  console.log(
    "It is currently " +
      response.body.current.temperature +
      " degrees out. It feels like " +
      response.body.current.feelslike +
      " degrees out"
  );
});
