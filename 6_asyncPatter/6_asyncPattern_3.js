const {readFile,writeFile, appendFile}=require('fs');

const util=require('util');

const readFilePromise=util.promisify(readFile);
const writeFilePromise=util.promisify(writeFile);

const start=async()=>{
    try {
        const first=await readFilePromise('./content/first.txt','utf-8');
        const second=await readFilePromise('./content/second.txt','utf-8')
        await writeFilePromise('./content/result-mindGranaid.txt',`from first:${first} form second:${second}`,{flag:'a'})
        console.log(first);
        console.log(second);
    } catch (error) {
        console.log(error)
    }
}

start()