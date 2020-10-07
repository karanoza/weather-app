const http = require("http");
const url =
  "http://api.weatherstack.com/current?access_key=69808d7dddadeb0437ae9d857d4b2604&query=18.52361,73.84778&units=f";

const request = http.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });

  response.on("error", (error) => {
    console.log("An Error", error);
  });
});

request.end();
