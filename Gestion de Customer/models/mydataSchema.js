const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// define the Schema (the structure of the article)
const articleSchema = new Schema({
  lastName:String,
  firstName:String,
  email:String,
  phoneNumber:String,
  age:Number,
  country :String,
  gender:String,
});




// Create a model based on that schema
const Mydata = mongoose.model("Mydataa", articleSchema);




// export the model
module.exports = Mydata












