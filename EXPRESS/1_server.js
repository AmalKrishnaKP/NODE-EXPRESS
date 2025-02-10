


const express=require('express')
const path=require('path')

const app=express()

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./sample/index.html'))
})


app.all('*',(req,res)=>{
    res.status(400).send(`<h1>page not found</h1>`)
})

app.listen(5000,()=>{
    console.log("server 5000 is listening...")
})