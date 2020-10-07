const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const address = process.argv[2];

if (!address) {
  console.log("Please provide an address");
} else {
  geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error);
    }

    forecast(latitude, longitude, (error, foreCastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log("latitude" + latitude + "Longitude" + longitude);
      console.log(foreCastData);
    });
  });
}

console.log(process.argv);
