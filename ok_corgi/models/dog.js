// Dog model w/ Mongoose
var mongoose = require('mongoose');

var dogSchema = new moongoose.Schema({
  // dog: {type:String, required: true },
  name: {type:String, required: true},
  photo_url: {type:String, required: true},
  like: {type:Boolean }
});

var Dog = moongoose.model('Dog', dogSchema);
module.exports = Dog;
