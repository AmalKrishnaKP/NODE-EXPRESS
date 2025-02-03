const {readFile}=require('fs');
const { reject, result } = require('lodash');
const { resolve } = require('path');


const gettxt=(path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf-8',(err,data)=>{
            if(err)
                reject(err);
            else
                resolve(data);
        })
    })
}


const start=async()=>{
    try {
        const first=await gettxt('./content/first.txt')
        console.log(first)
    } catch (error) {
        console.log(error)   
    }
}
start()
