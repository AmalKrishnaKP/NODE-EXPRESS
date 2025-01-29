// synchronus approch
    // each task will be executed after the completion of the previous task

const {readFileSync,writeFileSync}=require('fs')

console.log(`start`);

const first=readFileSync('./content/first.txt','utf8');
console.log(first);

const second=readFileSync('./content/second.txt','utf8');
console.log(second);


writeFileSync('./content/result_sync.txt',`here is the content in first file:${first} and from second file:${second}`, {flag:'a'});//flag:'a' is for append mode, it append the content to the file


const result_sync=readFileSync('./content/result_sync.txt','utf8');
console.log(result_sync);

console.log(`end of the task`);

console.log(`beggining next task`);
