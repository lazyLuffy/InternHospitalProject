const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        const con = await mongoose.connect(process.env.MONGO_URI,{
            // userNewUrlParser:true,
            // useUnifiedTopology:true,
            // useFindAndMondify:false,



            // bhaiyaaaa ek config filee thii ptaaani khaa gieee ussssi mei tha mongo ka port ka hahahahahahah ese kaise khi chli gyi
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