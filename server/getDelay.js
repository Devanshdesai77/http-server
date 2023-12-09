function getDelay(req, res) {
    const delayInSeconds = parseInt(req.url.split('/')[2], 10);
    if (!isNaN(delayInSeconds) && delayInSeconds > 0) {
      setTimeout(() => {
        res.writeHead(200);
        res.end(`Delayed in ${delayInSeconds}`);
      }, delayInSeconds * 1000);
    }
  }
  
  module.exports = getDelay;