const http=require('http')
const {readFileSync}=require('fs')
const homePage=readFileSync('./sample/index.html')
const stylePage=readFileSync('./sample/style.css')
const funcPage=readFileSync('./sample/javascript.js')


const server=http.createServer((req,res)=>{
    // console.log(req)
    // console.log(req.method)
    console.log(req.url)
    const urls=req.url

    //home page
    // 200_-successfull req
    if(urls==="/")
    {
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()

    }
    // style
    else if(urls==="/style.css")
    {
        res.writeHead(200,{'content-type':'text/css'})
        res.write(stylePage)
        res.end()
    }

    // javascript
    else if(urls==="/javascript.js")
    {
        res.writeHead(200,{'content-type':'text/html'})
        res.write(funcPage)
        res.end()
    }
    // about page
    // 200_-successfull req

    else if(urls==="/about")
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