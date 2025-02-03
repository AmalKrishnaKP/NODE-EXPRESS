console.log("executed the first");

const fs=require('fs');

fs.readFile('./content/first.txt','utf-8',(err,result)=>{// since the read file is asyncronus the event loop will execute it only later the other
    if(err)
        console.log(err);
    else
        console.log(result);
    console.log("executed the second");
})

console.log("executed the third");
