function getJson(res) {
    const jsonData = {
      message:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      author: "Martin Fowler",
    };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(jsonData, null, 2));
  }
  
  module.exports = getJson;