// lae7B9h1qRLOHYYH user fakruddeen
// 2UuwBlcP5UtWN7YS user password for fakruddeenansari
// mongodb+srv://fakruddeenansari:2UuwBlcP5UtWN7YS@cnotebook.3yqagux.mongodb.net/?retryWrites=true&w=majority

const connectToMongo = require("./db");
const express = require("express");
connectToMongo();

const app = express();
const port = 6543;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
