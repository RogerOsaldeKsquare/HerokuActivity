const { Activity } = require('../models');

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

function duplicated(req, res, next) {
    const { body: {activity, author} } = req; 
    let act;
    Activity.getAll((activities)=> {
        act = (!activities.find(ent => (ent.activity === activity && ent.author === author)));
        if (act){ 
            next();
        } else {
            res.status(404).send({
                message:  'This Activity already exists in database'
            });
        }
    });  
}


module.exports = {
    author,
    duplicated,
};