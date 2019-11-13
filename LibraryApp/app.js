const express= require('express');
const chalk=require('chalk');
var path= require('path');
var app=new express();
const booksRouter=express.Router();
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



app.use(express.static(path.join(__dirname,"/public")));
app.use('/books',booksRouter);
app.set('views','./src/views');
app.set('view engine','ejs');
// app.get('/',function(req,res){
//     res.render('index.ejs',{list:['book1','book2','book3'],title:"Library"});



var nav=[{link:"/",title:'Home'},
            {link:"/login",title:'LogIn'},
            {link:"/signup",title:'SignUp'},
            {link:"/books",title:'Books'},
            {link:"/authors",title:'Authors'}]
var books=[
    {image:"pro1.jpeg",
     title:" War and peace",
     genre:"Historical fiction",
     auhtor:"Lev Nicolayevich" },
     {image:"pro2.jpeg",
     title:" War ",
     genre:"Historical fiction",
     auhtor:"Lev Nicolayevich" },
     {image:"logo.png",
     title:"  peace",
     genre:"Historical fiction",
     auhtor:"Lev Nicolayevich" },
     {image:"pro3.jpeg",
     title:" Lev Nicolayevich",
     genre:"Auto Biography",
     auhtor:"Lev Nicolayevich" },
     {image:"pro4.jpeg",
     title:" Historical fiction",
     genre:"Historical fiction",
     auhtor:"Lev Nicolayevich" },
    ] ;    


booksRouter.route('/')
.get((req,res)=>{
res.render('books',{
nav,
title:"Books",
books
});

});



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