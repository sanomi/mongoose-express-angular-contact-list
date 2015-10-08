var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next) {
  res.send('received');
});

router.post('/', function(req, res, next) {
  console.log(req.body)
  res.send();
});

module.exports = router;
