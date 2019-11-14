var express = require('express');
var authorRouter = express.Router();
var authors = [{ name: "chegan bagath", country: "India", Books: 20, image: 'auth1.jpeg' },
{ name: " bagath", country: "India", Books: 12, image: 'pro2.jpeg' },
{ name: "karthy", country: "India", Books: 2, image: 'auth2.jpeg' },
{ name: "chegan", country: "India", Books: 10, image: 'auth3.jpg' },
{ name: "guru", country: "India", Books: 25, image: 'pro1.jpeg' },
{ name: "babu", country: "India", Books: 50, image: 'pro2.jpeg' }];
function route(nav) {

    authorRouter.route('/')
        .get((req, res) => {
            res.render('authors.ejs', {
                nav,
                title: "Authors",
                authors
            }
            )

        });
    authorRouter.route('/:id')
        .get((req, res) => {
            const id = req.params.id;
            res.render('author.ejs', {
                nav,
                title: "Author",
                author: authors[id]
            }
            )
        })


    return authorRouter;
}
module.exports = route;