const express = require('express');
const route = express.Router();
const controller = require('../controller/controller');
const axios = require('axios');
// const { response } = require('express');


route.get('/', async (req, res) => {
    controller.find(req).then(response => {
        res.render('index', { users: response })
    })
    // axios.get('http://localhost:8080/api/users')
    //     .then(function(response){
    //         // console.log(response.data)
    //         res.render('index',{users:response.data})
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
})
route.get('/add-user', (req, res) => {
    res.render('add_user')
})

route.get('/update-user', (req, res) => {
    // req.params = { id: req.query.id };
    console.log(req.query);
    controller.find(req).then(response => {
        console.log(response);
        res.render("update_user", { user: response })
})
    // axios.get('http://localhost:8080/api/users',{params:{id:req.query.id}})
    //     .then(function(userdata){
    //         console.log(userdata.data.name)
    //         res.render("update_user",{user:userdata})
    //     })
    //     .catch(err=>{
    //         res.send(err)
    //     })
})

// API

route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

module.exports = route;