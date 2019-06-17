const express = require("express");
const app = express();

app.get("/students", (req, res, next) => {
  res.status(200).json("All of the students!!!");
})

app.listen(1234, () => {
  console.log("Listening on port 1234!!!");
})
