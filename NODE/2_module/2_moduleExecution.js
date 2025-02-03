const names=require('./2_module1') ;
const tellHello=require('./2_module2');
const alternat=require('./2_moduleAlterSyntx');

console.log(alternat.AnObj)
console.log(alternat.names);




// hellow(`amal`);
// hellow(john);
// hellow(peter);

tellHello(`amal`);
tellHello(names.john);
tellHello(names.peter);