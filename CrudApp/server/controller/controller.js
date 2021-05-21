var Userdb = require('../models/model');

// create and save new user 
exports.create = (req,res)=>{
    // validate request
    console.log(' i m in post')
    if(!req.body){
        return res.status(402).send({messsage:"content can not be empty"})
    }
    // console.log('created api')
    const user = new Userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    })
    console.log(user)
    user
        .save(user)
        .then(data=>{
            res.redirect('/add-user')
        })
        .catch(err=>{
            res.status(500).send({
                error : err.message || 'Something wrong'
            })
        })
}

// retrive and return all user //and single user

exports.find = async (req,res)=>{
    if(req.query.id){
        Userdb.findById(req.query.id)
            .then(data=>{
                res.status(200).send(data)
            })
            .catch(err=>{
                error:err.error || 'ID IS INCORECT'
            })
    }
    else {
    Userdb.find()
        .then(data=>{
            console.log(data)
            res.send(data)
        })
        .catch(err=>{
            res.status(404).send({
                error:err.error || 'CAN NOT RETRIVE DATA'
            })
        })
    }
}

// update a new identi user by id

exports.update=(req,res)=>{
    Userdb.findByIdAndUpdate(req.params.id,req.body)
    .then(data=>{
        console.log(data);
        res.send(data);
    })
    .catch(err=>{
        res.status(404).send({
            error:err.error || 'cannot update'
        })
    })
}

//delete a user with speacifed user id in the request

exports.delete=(req,res)=>{
    Userdb.findByIdAndDelete(req.params.id)
    .then(data=>{
        console.log(data);
        res.send(data);
    })
    .catch(err=>{
        res.status(404).send({
            error:err.error || 'cannot update'
        })
    })
}