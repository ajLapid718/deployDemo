const path = require("path");
const express = require("express");
const app = express();

app.get("/students", (req, res, next) => {
  res.status(200).json("All of the students!!!");
})

let locationOfPublicFolder = path.join(__dirname, "client", "build")
app.use(express.static(locationOfPublicFolder));

app.listen(1234, () => {
  console.log("Listening on port 1234!!!");
})
