const http=require('http');

const {createReadStream}=require('fs')

http.createServer((req,res)=>{
    const text=readFileSync('./content/big.txt');
    res.end(text)
}).listen(5000)

http.createServer((req,res)=>{
    const stream=createReadStream('./content/big.txt')
    stream.on('open',()=>{
        stream.pipe(res )
    })
    stream.on('error',(err)=>{
        console.log(err)
    })
}).listen(5000)