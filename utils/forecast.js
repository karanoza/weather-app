const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=69808d7dddadeb0437ae9d857d4b2604&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to Weather services!", undefined);
    } else if (response.body.error) {
      callback("Unable to find loction!", undefined);
    } else {
      callback(
        undefined,
        console.log(
          response.body.current.weather_descriptions[0] +
            ". It is currently " +
            response.body.current.temperature +
            " degrees out. It feels like " +
            response.body.current.feelslike +
            " degrees out"
        )
      );
    }
  });
};

module.exports = forecast;
