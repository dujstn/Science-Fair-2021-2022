const express = require("express");
const path = require("path");
const request = require("request");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "build")));

app.post("/reqinso", function (req, res) {
  var url = "https://heliios-backend.herokuapp.com/" + req.url;
  r = request.post({ uri: url, json: req.body });

  req.pipe(r).pipe(res);
});

app.post("/makepred", function (req, res) {
  var url = "https://heliios-backend.herokuapp.com/" + req.url;
  r = request.post({ uri: url, json: req.body });

  req.pipe(r).pipe(res);
});

app.post("/makepred-brk", function (req, res) {
  var url = "https://heliios-backend.herokuapp.com/" + req.url;
  r = request.post({ uri: url, json: req.body });

  req.pipe(r).pipe(res);
});

app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "build", "index.html"))
);

app.listen(port, () => console.log(`Server hosting on port ${port}`));
