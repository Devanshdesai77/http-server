const { v4: uuidv4 } = require('uuid');

function getuuid(res){
const uuidno = uuidv4();
  const JSONobject = {
    uuid: uuidno,
  };
  res.status(200).json(JSONobject);
}

module.exports=getuuid