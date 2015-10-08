var express = require('express');
var router = express.Router();
var User = require('../models/userModel.js')

router.get('/', function(req, res, next) {
  res.send('received');
});

router.post('/', function(req, res, next) {
  console.log('req.body', req.body)
  var user = new User(req.body.data);
	user.save(function(err, savedUser){
	console.log(err);
  res.send(savedUser);
	})
});

module.exports = router;
