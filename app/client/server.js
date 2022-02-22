const express = require("express");
const path = require("path");
const { createProxyMiddleware } = require('http-proxy-middleware');
const request = require("request")



const app = express();
const port = process.env.PORT || 8080;


app.use(express.static(path.join(__dirname, "build")));

app.use('/', function(req, res) {
    var url = "https://heliios-backend.herokuapp.com/"+ req.url;
    var r = null;
    if(req.method === 'POST') {
       r = request.post({uri: url, json: req.body});
    } else {
       r = request(url);
    }
  
    req.pipe(r).pipe(res);
  });

// This route serves the React app




app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, "build", "index.html")));

app.listen(port, () => console.log(`Server hosting on port ${port}`));