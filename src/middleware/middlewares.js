const { Book } = require('../models');

function author(req, res, next){
    const { body: {author} } = req;
    if(!author == " "){
        next();
    }else{
        res.status(404).send({
            message:  'The Author cant be empty'
        });
    }  
}

function year(req, res, next) {
    const { body: {publication_year} } = req;
    const year = parseInt(publication_year, 10)
    if(!isNaN(year)){
        if(year > 1454 ){
            if(year <= 2021){
                req.body.publication_year = year;
                next()
            }else{
                res.status(404).send({
                    message: 'The maximun publication year, is the current year'
                });
            }
        }else{
            res.status(404).send({
                message: 'The year must be over the 1454'
            });
        }
    }
}

function duplicated(req, res, next) {
    const { body: {tittle, author, publication_year} } = req; 
    let book;
    Book.getAll((books)=> {
        book = (!books.find(ent => (ent.tittle === tittle && ent.author === author && ent.publication_year === publication_year)));
        if (book){ 
            next();
        } else {
            res.status(404).send({
                message:  'Book already exists in database'
            });
        }
    });  
}


module.exports = {
    author,
    duplicated,
    year
};