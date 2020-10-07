const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1Ijoia2FyYW5vemEiLCJhIjoiY2tmd2J3cDJyMGEyYzJ6bzhsbnd4bjFtciJ9.BKyrYlTPlD9kimv5hfIncQ";

  request({ url: url, json: true }, (error, response) => {
    // Error Handling

    if (error) {
      callback("Unable to connect to loction services!", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location, Try another search", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
