const http=require('http')

const server=http.createServer((req,res)=>{
    // console.log(req)
    // console.log(req.method)
    // console.log(req.url)
    const url=req.url

    //home page
    // 200_-successfull req
    if(url==="/")
    {
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>Home Page</h1>')
        res.end()

    }
    // about page
    // 200_-successfull req

    if(url==="/about")
        {
            res.writeHead(200,{'content-type':'text/html'})
            res.write('<h1>About Page</h1>')
            res.end()
    
        }
    //404 -error
    else
    {
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }
})

server.listen(5100)


//http response status code
// MIME type