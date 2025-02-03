// asynchronus approch
    // allows tasks to be executed concurrently without waiting for each other to complete

const {readFile,writeFile, read}=require('fs');


console.log(`start`);

readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return 0;
    }
    const first=result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return 0;
        }
        const second=result;
        writeFile('./content/result_async.txt',`from fist:${first},from second:${second}`,{flag:'a'},(err,result)=>{
            if(err){
                console.log(err);
                return 0;
            }
            console.log(result);
            console.log(`end of the task`);
        })
    })
})

console.log(`beggining next task`);