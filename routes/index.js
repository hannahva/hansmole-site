var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hansmole' });
});

router.get('/music', function(req, res, next) {
  res.render('music', { title: 'Hansmole' });
});

router.get('/art', function(req, res, next) {
  res.render('art', { title: 'Hansmole' });
});

module.exports = router;
