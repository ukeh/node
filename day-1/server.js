var http=require('http');

var server=http.createServer(function(req,res){
   res.write('<h1>hello world</h1>');
 res.end("hai");

});
server.listen(5000);

console.log(server);