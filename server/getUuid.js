const { v4: uuidv4 } = require("uuid");

function getUuid(res) {
    const uuidno = uuidv4();
    const JSONobject = {
      uuid: uuidno,
    };
    res.writeHead(200);
    res.write(JSON.stringify(JSONobject));
    res.end();
  }
  
  module.exports = getUuid;