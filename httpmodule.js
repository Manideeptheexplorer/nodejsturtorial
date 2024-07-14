const https=require("http")

const server=https.createServer((req,res)=>{
   if(req.url==='/'){
       res.end("welcome to the home page")
       
   }else if(req.url==='/about'){
       res.end("welcome to the about page")
       
   } else {
       res.end(
           `<h1>OOPS!!!page not found</h1>
           <p>something went wrong</p>
           <a href="/">back to home</a>`)
   }
})
server.listen(5000)
