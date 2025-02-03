const {readFile}=require('fs');
// const { reject, result } = require('lodash');
const { resolve } = require('path');



const gettxt=(path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf-8',(err,data)=>{
            if(err)
                return reject(err);
            else
                return resolve(data);
        })
    })
}

gettxt('./content/first.txt')
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))