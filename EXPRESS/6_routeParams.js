const express=require('express')
const app=express()
const {products}=require('./data')

app.get('/',(req,res)=>{
    res.send(`<h1>home page</h1><a href='/api/products'>products</a>`)
})

app.get('/api/products',(req,res)=>{
    const newpro=products.map((product)=>{
        const {id,name,price}=product
        return {id,name,price}
    })
    res.json(newpro)
})

app.get('/api/products/:id',(req,res)=>{
    console.log(req.params)
    const singlepro=products.find((product)=>product.id ===1)
    res.json(singlepro)
})
app.listen(5000,()=>{
    console.log('server is listening in the port number 5000...')
})