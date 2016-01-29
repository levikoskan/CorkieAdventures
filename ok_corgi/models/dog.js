// Dog model w/ Mongoose
var mongoose = require('mongoose');


var dogSchema = new mongoose.Schema({

  // dog: {type:String, required: true },
  name: {type:String, required: true},
  photo_url: {type:String, required: true},
  like: {type:Boolean }
});

var Dog = mongoose.model('Dog', dogSchema);
module.exports = Dog;
