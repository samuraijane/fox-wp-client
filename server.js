
require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const authRouter = require("./routes");

const app = express();
app.use(bodyParser.json());

app.use(express.static("./build"));
app.use("/auth", authRouter);

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "/build/index.html"));
});

app.listen(process.env.PORT || 8080);
