const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=69808d7dddadeb0437ae9d857d4b2604&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to Weather services!", undefined);
    } else if (body.error) {
      callback("Unable to find loction!", undefined);
    } else {
      callback(
        undefined,
        console.log(
          body.current.weather_descriptions[0] +
            ". It is currently " +
            body.current.temperature +
            " degrees out. It feels like " +
            body.current.feelslike +
            " degrees out"
        )
      );
    }
  });
};

module.exports = forecast;
