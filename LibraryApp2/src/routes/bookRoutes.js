


var express = require('express');
var booksRouter = express.Router();

function route(nav) {
    var books = [
        {
            image: "harry.jpga",
            title: " War and peace",
            genre: "Historical fiction",
            auhtor: "heaven"
        },
        {
            image: "heaven.jpg",
            title: " War ",
            genre: "Historical fiction",
            auhtor: "Lev Nicolayevich"
        },
        {
            image: "black.jpg",
            title: "  peace",
            genre: "Historical fiction",
            auhtor: "Lev Nicolayevich"
        },
        {
            image: "famous.jpg",
            title: " Lev Nicolayevich",
            genre: "Auto Biography",
            auhtor: "Lev Nicolayevich"
        },
        {
            image: "how.jpeg",
            title: " Historical fiction",
            genre: "Historical fiction",
            auhtor: "Lev Nicolayevich"
        },
    ];


    booksRouter.route('/')
        .get((req, res) => {
            res.render('books', {
                nav,
                title: "Books",
                books
            })
        });

    booksRouter.route('/add')
        .get((req, res) => {
            res.render('addbooks.ejs', {
                nav, title: "Upload Book Details"
            })
        })

    booksRouter.route('/save')
        .post((req, res) => {
            //res.send("form submitted")
            console.log(req.body);
        })



    booksRouter.route('/:id')
        .get((req, res) => {
            const id = req.params.id;
            res.render('book.ejs', {
                nav,
                title: "Book",
                book: books[id]
            })

        });



    return booksRouter;
}

module.exports = route;