var express = require('express');
var router = express.Router();
var User = require('../models/userModel.js')

router.get('/', function(req, res, next) {
	User.find({}, function(err, users){
  res.send(users);
	})
});

router.post('/', function(req, res, next) {
  console.log('req.body', req.body)
  var user = new User(req.body.data);
	user.save(function(err, savedUser){
	console.log(err);
  res.send(savedUser);
	})
});

router.delete('/:userId', function(req,res,next){
	console.log('req.params', req.params);
	User.findByIdAndRemove(req.params.userId, function(err, deletedUser){
	res.send();
	})
})

module.exports = router;
