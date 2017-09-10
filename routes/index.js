var express = require('express');
var router = express.Router();
var title = 'Hansmole'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title });
});

router.get('/music', function(req, res, next) {
  res.render('music', { title });
});

router.get('/art', function(req, res, next) {
  res.render('art', { title });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title });
});

module.exports = router;
