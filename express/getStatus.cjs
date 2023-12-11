function getStatus(req, res) {
  const statusCode = parseInt(req.params.statusCode, 10);
  if (!isNaN(statusCode) && statusCode >= 100 && statusCode <= 599) {
    res.status(statusCode).send(`Response with status code: ${statusCode}`);
  } else {
    res.status(400).send("Invalid status code");
  }
}
module.exports = getStatus;
