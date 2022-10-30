
const Mongoose = require("mongoose")
const localDB = `mongodb+srv://Hanansa1:hanan1234@cluster0.vypjc0f.mongodb.net/?retryWrites=true&w=majority`


const connectDB = async function connect(){
   try {
     await Mongoose.connect(localDB);
     console.log("MongoDB Connected");
    }
    catch(error){
     console.log("ERROR: MongoDB NOT Connected .. ! \n"+error)
    }

    
}

module.exports = connectDB