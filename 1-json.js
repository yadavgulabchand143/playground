const fs = require("fs");

const book = {
  title: "Ego is the enemy",
  author: "Ryan Holiday",
};

// take json and convert into string
// const bookJson = JSON.stringify(book);
// console.log(bookJson);

// //take string and convert into json
// const parsedData = JSON.parse(bookJson);
// console.log(parsedData);
// write a file
// fs.writeFileSync("1-JSON.json", bookJson);

//read a file
// const dataBuffer = fs.readFileSync("1-JSON.json");
// const dataJson = dataBuffer.toString();
// const data = JSON.parse(dataJson);
// console.log(data.title);

//  challenge
// const dataBuffer = fs.readFileSync("1-JSON.json");
// const dataJson = dataBuffer.toString();
// const data = JSON.parse(dataJson);

// data.name = "gulab";
// data.age = "29";
// const dataAfterStringify = JSON.stringify(data);
// fs.writeFileSync("1-JSON.json", dataAfterStringify);
