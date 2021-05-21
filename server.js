const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require("path")
const connectDB = require('./CrudApp/server/database/connection')
const app = express();

dotenv.config({path:path.resolve(__dirname,"CrudApp/views/config.env")})
const PORT = process.env.PORT || 8080;

// log request
app.use(morgan('tiny'))
connectDB()

// parse request to body parser

app.use(bodyparser.urlencoded({extended:true}))

// set view engine
// using embed javascript

app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

//views ka path 

// tumari serve.js kha  hai ok done done done how?
//views ka path shi set ni tha okayyy bhiyaaa thankuu >>>>>;-)

console.log(`${__dirname}/CrudApp`);
app.set('views',path.join(`${__dirname}/CrudApp/views`,''))
console.log(path.join(`${__dirname}/CrudApp/views`,''))     



// load assets
app.use('/css',express.static(path.resolve(__dirname,"CrudApp/assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"/assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"CrudApp/assets/js")))

app.use('/',require('./CrudApp/server/route/routes'))

app.listen(PORT,()=>{console.log(`listening.... At = http://localhost:${PORT}`)})