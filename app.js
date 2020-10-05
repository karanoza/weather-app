const request = require("request");

// Weather stack Api

const url =
  "http://api.weatherstack.com/current?access_key=69808d7dddadeb0437ae9d857d4b2604&query=18.51957,73.85535";

request({ url: url, json: true }, (error, response) => {
  // const data = JSON.parse(response.body);
  if (error) {
    console.log("unable to connect to weather service");
  } else if (response.body.error) {
    console.log("Unable to find location");
  } else {
    console.log(
      response.body.current.weather_descriptions[0] +
        ". It is currently " +
        response.body.current.temperature +
        " degrees out. It feels like " +
        response.body.current.feelslike +
        " degrees out"
    );
  }
});

//mapbox.com geocode API url

const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2FyYW5vemEiLCJhIjoiY2tmd2J3cDJyMGEyYzJ6bzhsbnd4bjFtciJ9.BKyrYlTPlD9kimv5hfIncQ";

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to location services");
  } else if (response.body.features.length === 0) {
    console.log("Unable to find location, Try another search");
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];

    console.log(latitude, longitude);
  }
});
