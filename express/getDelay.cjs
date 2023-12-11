function getDelay(req, res) {
  const seconds = parseInt(req.params.delayInSeconds);
  const delayInSeconds = parseInt(req.params.delayInSeconds, 10);
  if (!isNaN(req.params.delayInSeconds) && delayInSeconds > 0) {
    setTimeout(() => {
      res.status(200).send(`Delayed in ${delayInSeconds} seconds`);
    }, delayInSeconds * 1000);
  } else {
    res.status(400).send("Invalid delay value");
  }
}

module.exports=getDelay
