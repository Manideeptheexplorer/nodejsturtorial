const { log } = require("console")
const {readFile,writeFile}=require("fs")

readFile('./content/subfolder/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const data1=result
    readFile('./content/subfolder/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
                return
        }
        const data2=result
        writeFile(
            './content/subfolder/resultasync.txt',
            `${data1}${data2}`,
            (err,result)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log(result);
            }
        )  
    })
    
   
})