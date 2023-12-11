function getJson(res) {
    const jsonData = {
      message:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      author: "Martin Fowler",
    };
    res.status(200).json(jsonData)
  }
  
  module.exports = getJson;