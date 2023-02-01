const mongoose = require('mongoose');



const ContactSchema =mongoose.Schema({
 

    name: String,
    age: Number,
    favoriteFoods:String


})
module.export=mongoose.model('contact',ContactSchema)