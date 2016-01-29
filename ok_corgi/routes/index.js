var express = require('express');
var router = express.Router();
var Dog = require('../models/dog');

// function randomColor() {
//   var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];
//   return colors[Math.floor(Math.random()*colors.length)];
// }

function randomDog(dogArray) {
  var documents = dogArray;
  return documents[Math.floor(Math.random() * documents.length)];
}

/* GET home page. */
router.get('/', function(req, res, next) {
  // name = req.params.name || "Friend";
  // var color = randomColor();

  // USE MONGOOSE TO GET A RANDOM DOG FROM THE DATABASE, THEN RENDER THE VIEW IN THE DATABASE CALLBACK

  Dog.find({ like: { $exists: false } }, function(err, data) {
    if (err) console.log(err);
    var random = randomDog(data);
    // console.log(random.name);
    res.render('index', {
      title: 'OKCorgi',
      name: random.name,
      photo: random.photo_url,
      id: random._id
    });
  });
});

/* GET dog form. */
router.get('/dog_form', function(req, res, next) {
  // var color = randomColor();
  res.render('dog_form', {
    title: 'OKCorgi'
  });
});

router.get('/liked_dogs', function(req, res, next) {
  Dog.find({
    like: true
  }, function(err, data) {
    if (err) console.log(err);
    res.render('liked_dogs', {
      title: 'OKCorgi',
      arr: data
    });
    console.log(data);
    res.redirect('/');
  })
})

// USE MONGOOSE TO SAVE A NEW DOG TO THE DATABASE, THEN REDIRECT TO THE ROOT URL
router.post('/dogs', function(req, res, next) {
  var dogName = req.body.name;
  var dogPhoto = req.body.photo_url;

  var newDog = Dog({
    name: dogName,
    photo_url: dogPhoto
  });

  newDog.save(function(err) {
    if (err) console.log(err);

    // res.redirect('/');
    res.send('Dog Saved!');
  })

});

router.post('/dogs/:id', function(req, res, next) {
  Dog.findById(req.params.id, function(err, dog) {
    if (err) console.log(err);
    //value of button
    dog.like = req.body.like;

    dog.save(function(err) {
      if (err) console.log(err);
      res.redirect('/');
    });
  });
});

module.exports = router;
