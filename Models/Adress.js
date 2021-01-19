const mongoose= require('mongoose')
const adressSchema = new mongoose.Schema({
    area:{
        type:String,required:true
    },
    pincode:{
        type:Number,
        required:true
        
    },
    state:{
        type:String,
        required:true
       
    },
    Country:{
        type:String
    }
})


var Adress = mongoose.model("Adress", adressSchema);

module.exports = Adress;

