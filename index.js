var express = require("express");
var cors = require("cors");
require("dotenv").config();
const upload = require("express-fileupload");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var app = express();
app.use(upload());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});
app.post("/api/fileanalyse/", (req, res) => {
  console.log(req.files.upfile.toString("utf8"));
  res.json({ h: "hello" });
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
