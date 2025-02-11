


const express=require('express')
const path=require('path')

const app=express()

// setup static and middleware

app.use(express.static('./sample'))//the css and js can be also accessed by placing it in another folder and name the folder here

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./sample/index.html'))
// })


app.all('*',(req,res)=>{
    res.status(400).send(`<h1>page not found</h1>`)
})

app.listen(5100,()=>{
    console.log("server 5000 is listening...")
})