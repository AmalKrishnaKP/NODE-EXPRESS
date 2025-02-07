const {writeFile, writeFileSync}=require('fs');

for(let i=0;i<1000;i++)
    writeFileSync('./content/big.txt',`hello ${i} \n`,{flag:'a'});


const {createReadStream}=require('fs')

const stream=createReadStream('./content/big.txt','utf-8')

stream.on('data',(result)=>{
    console.log(result)
})

stream.on('error',(err)=>{
    console.log(err)
})