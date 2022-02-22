const express = require("express");
const path = require("path");
const { createProxyMiddleware } = require('http-proxy-middleware');
const request = require("request")



const app = express();
const port = process.env.PORT || 8080;


app.use(express.static(path.join(__dirname, "build")));

app.post('/*', function(req,res) {
  //modify the url in any way you want
  var newurl = 'https://heliios-backend.herokuapp.com/reqinso';
  console.log("fuck you")
  request(newurl).pipe(res);
});
// This route serves the React app




app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, "build", "index.html")));

app.listen(port, () => console.log(`Server hosting on port ${port}`));