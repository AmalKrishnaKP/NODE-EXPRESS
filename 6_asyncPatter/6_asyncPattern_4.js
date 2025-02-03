const {readFile,writeFile, appendFile}=require('fs').promises;



const start=async()=>{
    try {
        const first=await readFile('./content/first.txt','utf-8');
        const second=await readFile('./content/second.txt','utf-8')
        await writeFile('./content/result-mindGranaid.txt',`from first:${first} form second:${second}`,{flag:'a'})
        console.log(first);
        console.log(second);
    } catch (error) {
        console.log(error)
    }
}

start()

