const express=require('express')
const app=express()

// app.get

// home page
    app.get('/',(req,res)=>{ 
        res.status(200).send('Home Page')
    })
// about page
app.get('/about',(req,res)=>{
    res.status(200).send('About Page')
})

// all other page

app.all('*',(req,res)=>{
    res.status(400).send('<h1>Page not found</h1>')
})
app.listen(5000,()=>{
    console.log("server is listening")
})
//app.get   =read data 
//app.post  =instert data
//app.put   =update data
//app.delete=delete data
//app.all   =handle all http verbs
//app.use
//app.listen
