// Modules -Encaosulated Code (only share minimum)

// every file in a node is a module(default)

// const hellow=function(name){
//     console.log(`hello ${name}`);
    
// }


// local
const secret="super secret"

// share
const john="john";
const peter="peter"

module.exports={john,peter};
