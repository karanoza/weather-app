setTimeout(() => {
  console.log("2 seconds are up");
}, 2000);

const names = ["karan", "bunty", "bro"];

const shortNames = names.filter((name) => {
  return name.length <= 4;
});

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    };

    callback(data);
  }, 2000);
};

geocode("Pune", (data) => {
  console.log(data);
});
