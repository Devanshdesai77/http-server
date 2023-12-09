function getStatus(req, res) {
    const statusCode = parseInt(req.url.split('/')[2], 10);
    if (!isNaN(statusCode) && statusCode >= 100 && statusCode <= 599) {
      res.writeHead(statusCode);
      res.end(`Response with status code: ${statusCode}`);
    } else {
      res.writeHead(400);
      res.end('Invalid status code');
    }
  }
  
  module.exports = getStatus;