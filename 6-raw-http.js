const http = require("http");
const url =
  "http://api.weatherstack.com/current?access_key=131b93d1229d4f50280cf1f99bfaa06e&query=45,-75&units=f";

const request = http.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data = data + chunk.toString();
    // console.log(chunk);
  });
  response.on("end", () => {
    //console.log(data);
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("an Error ::: ", error);
});
request.end();
