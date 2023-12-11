const path=require('path')
const fs=require('fs')

function getHtml(res){
    const filePath=path.join(__dirname,"..","public",'index.html')
    fs.readFile(filePath,'utf-8',(err,content) => {
        if(err){
            res.status(500).send("Internal Server Error")
            return 
        }
        else{
            res.status(200).send(content)
        }
    })
}

module.exports=getHtml
