const express = require("express");
const path = require("path");
const { createProxyMiddleware } = require('http-proxy-middleware');


const app = express();
const port = process.env.PORT || 8080;


app.use(express.static(path.join(__dirname, "build")));

const apiProxy = createProxyMiddleware("https://heliios-backend.herokuapp.com/", {
    proxyReqPathResolver: req => url.parse(req.baseUrl).path
});
app.use("/*", apiProxy)

// This route serves the React app
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, "build", "index.html")));

app.listen(port, () => console.log(`Server hosting on port ${port}`));