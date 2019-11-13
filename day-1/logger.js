

/* need exporting */

// var url='http://ictkerala.org/';
// function print(message)
// {
// console.log(message)
// }
// module.exports=print;
/* more than one fn exporting */

var url="www.google.com";
function print(message){
    console.log(message);
}
module.exports.display=print;
module.exports.link=url;