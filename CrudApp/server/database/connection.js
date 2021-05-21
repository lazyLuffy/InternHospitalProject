const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        const con = await mongoose.connect(process.env.MONGO_URI,{
            // userNewUrlParser:true,
            // useUnifiedTopology:true,
            // useFindAndMondify:false,
            // useCreateIndex:true
            useUnifiedTopology:true,
            useNewUrlParser: true
        })
        console.log(`MongoDb connected:${con.connection.host}`);
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB;