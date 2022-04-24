const express = require("express");
const app = express();

let products = [];

app.get("/", (res, req) => {
  res.send("<h1>Hello world</h1>");
});

app.get("/api/products", (res, req) => {
  res.json(products);
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log("app is running on port 8000");
});
