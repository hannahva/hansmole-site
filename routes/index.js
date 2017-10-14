var express = require('express');
var router = express.Router();
var title = 'Hansmole';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title });
});

router.get('/music', function(req, res, next) {
  res.render('music', {
    title,
    page: req.path.split('/')[1]
  });
});

router.get('/art', function(req, res, next) {
  res.render('art', {
    title,
    page: req.path.split('/')[1]
  });
});

router.get('/about', function(req, res, next) {
  res.render('about', {
    title,
    page: req.path.split('/')[1]
  });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {
    title,
    page: req.path.split('/')[1]
  });
});

module.exports = router;
