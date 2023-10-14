const blogrouter=require("express").Router()

blogrouter.get("/bollywood",(req,res)=>{
    res.send("Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js")
})

blogrouter.get("/hollywood",(req,res)=>{
    res.send('Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js')
})

blogrouter.get("/technology",(req,res)=>{
    res.send('technology page')
})

blogrouter.get("/fitness",(req,res)=>{
    res.send('fitness page')
})


module.exports=blogrouter