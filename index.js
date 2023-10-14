const http = require('http')

const dummyData = require('./dummyData')
const details = JSON.stringify(dummyData)

const app1 = http.createServer((req,res)=>{
    if (req.url === '/post'){
        res.write('post page')
        res.end()
    }
    else if(req.url === '/comments'){
        res.write("<h1>What is Node Js</h1>")
        // res.write("<h3>hey this h3 heading</h3>")
        res.write("<p>As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.Single-threaded non-blocking I/O makes it an excellent choice for both real-time and data streaming applications, too. Node. js is easily employed as a server-side proxy, where it can handle a large amount of simultaneous connections in a nonblocking manner. It's useful for proxying different services with varying response times, or collecting data from multiple source points.</p>")
        res.write(details);
        res.end();
    }
    else{
        res.write('404 page not found')
        res.end()
    }
})

app1.listen(4001,()=>{
    try{
    console.log("server is live at 4001 port number")
}
catch (err){
    console.log(err,"error occurred")
}
})


// Express: 

const express = require("express")

const app = express();

const blogrouter = require('./router/blogRouter')
app.use(blogrouter) // middleware

app.get("/home",(req,res) =>{
    res.send("this is our home page")
})
app.post("/post/DB",(req,res)=>{
    res.send("HELLO DB")
})

// app.delete();
// app.put();

app.listen(4000,() =>{
    try{
        console.log('localhost 4000 port')
    }
    catch(error){
        console.log(error,"Error")
    }
});