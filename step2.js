// Copy over your step1.js code to step2.js
// Add a new function, webCat. This should take a URL and, using axios, should read the content of that URL and print it to the console.
// Modify the code that invoked cat so that, based on the command-line args, it decides whether the argument is a file path or a URL and calls either cat or webCat, respectively.
// $node step2.js one.txt
// This is file one.

// $node step2.js http://google.com
// <!doctype html><html ...

// ​
// If there is an error getting the page, it should print that.
// $node step2.js http://rithmschool.com/no-such-path
// Error fetchinghttp://rithmschool.com/no-such-path:
//   Error: Request failed with status code 404

const fs = require("fs");
const axios = require("axios");

function cat(path) {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(data);
  });
}
//funs cat on third array element of process

async function webCat(url) {
  try {
    let res = await axios.get(url);
    console.log(res.data);
  } catch (err) {
    console.error(`Error fetching:${url}: \n ${err}`);
    process.exit(1);
  }
}
let path = process.argv[2];

if (path.includes("http")) {
  webCat(path);
} else {
  cat(path);
}
