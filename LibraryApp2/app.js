const express= require('express');
const chalk=require('chalk');
const bodyParser=require('body-parser');
const cors=require('cors');
var path= require('path');
var app=new express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));


var nav=[{link:"/",title:'Home'},
            {link:"/login",title:'LogIn'},
            {link:"/signup",title:'SignUp'},
            {link:"/books",title:'Books'},
            {link:"/authors",title:'Authors'},
            {link:"/books/add",title:'AddBooks'}]




const booksRouter=require('./src/routes/bookRoutes')(nav);//passing nav to booksRouter
const authorRouter=require('./src/routes/authorRouter')(nav);

/* without view engine*/
// app.use(express.static(path.join(__dirname,"/public")));

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,"/src/views/index.html"));
// });




// app.listen(3000,()=>{
//          console.log("listening to port "+chalk.green('3000') );
//      });




// app.get("/",(req,res)=>{
// res.send("First express app");
// });
// app.listen(3000,()=>{
//     console.log("listening to port "+chalk.green('3000') );
// });



app.use(express.static(path.join(__dirname,"/public")))


app.use('/authors',authorRouter);
app.use('/books',booksRouter);
app.set('views','./src/views');
app.set('view engine','ejs');
// app.get('/',function(req,res){
//     res.render('index.ejs',{list:['book1','book2','book3'],title:"Library"});




    
   


app.get('/',function(req,res){ 
res.render('index',
{
nav,
title:"Library"
}
)});
app.listen(3000,()=>{
    console.log("listening to port "+chalk.green('3000') );
})