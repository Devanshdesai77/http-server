const http = require("http");
const getHtml=require("./getHtml")
const getJson=require("./getJson")
const getUuid=require("./getUuid")
const getStatus=require("./getStatus")
const getDelay=require("./getDelay")



const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/html") {
          getHtml(res)
    } else if (req.url === "/json") {
          getJson(res)
    } else if (req.url === "/uuid") {
       getUuid(res)
    } else if(req.url.startsWith('/status/')){
       getStatus(req,res)
    }else if(req.url.startsWith('/delay/')){
        getDelay(req,res)
    }
    else {
      res.writeHead(404);
      res.end("Not Found");
    }
  } else {
    res.writeHead(405);
    res.end("Method Not Allowed");
  }
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
