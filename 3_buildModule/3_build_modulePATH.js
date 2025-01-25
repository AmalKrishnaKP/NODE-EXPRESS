const path=require('path');

const path1=path.join('/content','\subfolder','just.txt');
console.log(path1);

const base=path.basename(path1)
console.log(base);


const file=path.resolve(__dirname,'content','subfolder','just.txt');
console.log(file);

console.log(path.resolve());
