const express = require("express");
const getHtml = require("./gethtml.cjs");
const getJson = require("./getJson.cjs");
const getuuid = require("./getuuid.cjs");
const getStatus = require("./getStatus.cjs");
const getDelay = require("./getDelay.cjs");
const app = express();

const port = process.env.PORT || 3000;

app.get("/html", (req, res) => {
  getHtml(res);
});

app.get("/json", (req, res) => {
  getJson(res);
});

app.get("/uuid", (req, res) => {
  getuuid(res);
});

app.get("/status/:statusCode", (req, res) => {
  getStatus(req, res);
});
app.get("/delay/:delayInSeconds", (req, res) => {
  getDelay(req, res);
});
app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`);
});
