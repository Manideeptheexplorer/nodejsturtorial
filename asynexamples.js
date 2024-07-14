// console.log("first execute")
// setTimeout(()=>{
//     console.log("second execute")
// },0)
// console.log("third execute")
// console.log("thank you for executing")
const https=require('http')
const server=https.createServer((req,res)=>{
    console.log("request sent")
    res.end("this is lohith")
})
server.listen(5000,()=>{
    console.log("server reaching the port:5000,")
})
