const fs = require("fs");
const path = require("path");

function getHtml(res) {
  const filePath = path.join(__dirname,".." ,"public", "index.html");

  fs.readFile(filePath, "utf8", (err, content) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
      return;
    }

    res.writeHead(200);
    res.end(content);
  });
}

module.exports = getHtml;
