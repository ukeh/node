const fs=require('fs');
// fs.readdir('./',(err,files)=>{
//     console.log(files);
// });
fs.readFile('file.txt','utf8',(err,data)=>{
    if (err) throw err;
    console.log(data);
})
var file=fs.readFileSync('file.txt','utf8');
console.log(file);

fs.writeFile('file2.txt',"poda unni",(err)=>{
if(err)
    Console.log(err);
else
    console.log('write operation complete.')    
})