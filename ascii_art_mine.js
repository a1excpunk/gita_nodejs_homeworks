//commonjs
// const art = require("ascii-art");
// const data = require("./sayings.json");

//ES module
import art from "ascii-art";
import fs from "fs";

const data = JSON.parse(fs.readFileSync("./sayings.json", "utf-8"));

const quotes = data.map((item) => item.saying);
const authors = data.map((item) => item.saying);
const tableData = quotes.map((quote, index) => [authors[index], quote]);

export default function ascii_main() {
  art.font("Hello NodeJS!", "doom", (err, rendered) => {
    if (err) console.log(`${err} is the error that ocured`);
    else console.log(rendered);
  });

  art.table({ data: tableData }, (err, rendered) => {
    if (err) console.log(`${err} is the error that ocured`);
    else console.log(rendered);
  });

  console.log(art.style("Hello Nodemon!", "magenta", true));
}
