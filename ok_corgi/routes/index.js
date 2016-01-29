var express = require('express');
var router = express.Router();
var Dog = require('../models/dog');

// function randomColor() {
//   var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];
//   return colors[Math.floor(Math.random()*colors.length)];
// }

function randomDog(dogArray) {
  var documents = dogArray;
  return documents[Math.floor(Math.random()*documents.length)];
}

/* GET home page. */
router.get('/', function(req, res, next) {
  // name = req.params.name || "Friend";
  // var color = randomColor();

  // USE MONGOOSE TO GET A RANDOM DOG FROM THE DATABASE, THEN RENDER THE VIEW IN THE DATABASE CALLBACK

  Dog.find({}, 'dog', function(err, data) {
    if (err) console.log(err);
    var random = randomDog(data);
    console.log(random.dog);
    res.render('index', { title: 'OKCorgi', dog: random.dog });
  });
});

/* GET dog form. */
router.get('/dog_form', function(req, res, next) {
  var color = randomColor();
  res.render('dog_form', { title: 'OKCorgi' });
});

  // USE MONGOOSE TO SAVE A NEW DOG TO THE DATABASE, THEN REDIRECT TO THE ROOT URL
router.post('/', function(req, res, next) {
  var newDog = req.body.dog;

  var newDog = Dog({
    dog: newDog
  });

  newDog.save(function(err){
    if (err) console.log(err);

    res.redirect('/');
  })

});

module.exports = router;
