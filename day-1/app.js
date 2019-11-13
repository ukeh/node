/* Day 1 */
// function fun(c){
// console.log(1+2)
// c();
// }
// fun(()=>{
//     console.log("hey kids");
// })


/* need importing */
// var logger=require('./logger.js');
// logger("hello");

/* more than one fn importing */
// var logger=require("./logger.js");
// logger.display("hello");
// console.log(logger.link);
// console.log(logger);

// var logger=require('./dateModule')
// console.log(logger.myDate());
var os=require('os');
//console.log(os);
console.log(os.freemem()+"\n"+os.type());
