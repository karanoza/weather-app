const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1Ijoia2FyYW5vemEiLCJhIjoiY2tmd2J3cDJyMGEyYzJ6bzhsbnd4bjFtciJ9.BKyrYlTPlD9kimv5hfIncQ";

  request({ url, json: true }, (error, { body }) => {
    // Error Handling
    console.log(body);
    if (error) {
      callback("Unable to connect to loction services!", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find location, Try another search", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
