//HTTP basics

const http=require('http')

const server = http.createServer((req, res)=>{    
    if(req.url === '/')
        res.end(`welcome to my home page`)
    else if(req.url ==='/about')
        res.end(`welcome to our about page`)
    else
        res.end(`
            <h1>Opps!</h1>
            <p>wrong page</p>
            <a href="/">home page</a>
            `)
})

server.listen(5100)
