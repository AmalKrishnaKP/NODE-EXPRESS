const express=require('express')

const app=express()

const {products}=require('./data')
// console.log(products)

app.get('/api/v1/query',(req,res)=>{
    // console.log(req.query)
    const {search,limit}=req.query
    // console.log(typeof(search))
    let newProducts=[...products]

    

    if(search)
    {
        newProducts=newProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
        console.log(newProducts)
    }
    if(limit)
    {
        newProducts=newProducts.slice(0,Number(limit))
    }
    res.json(newProducts)
    // res.send(`<h1>home  page</h1>`)

})

app.listen(5010,()=>{
    console.log("server running in port number 5010 ..");
    
})