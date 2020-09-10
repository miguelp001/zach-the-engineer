var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Zach The Engineer', nav: [{name: 'Home', active: true}, {name: 'Portfolio', active: false}, {name: 'Adventures', active: false}, {name: 'Resume', active: false}, {name: 'Contact', active: false}]});
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Portfolio', nav: [{name: 'Home', active: false}, {name: 'Portfolio', active: true}, {name: 'Adventures', active: false}, {name: 'Resume', active: false}, {name: 'Contact', active: false}]});
});

router.get('/adventures', function(req, res, next) {
  res.render('adventures', { title: 'Adventures', nav: [{name: 'Home', active: false}, {name: 'Portfolio', active: false}, {name: 'Adventures', active: true}, {name: 'Resume', active: false}, {name: 'Contact', active: false}]});
});

router.get('/resume', function(req, res, next) {
  res.render('resume', { title: 'My Resume', nav: [{name: 'Home', active: false}, {name: 'Portfolio', active: false}, {name: 'Adventures', active: false}, {name: 'Resume', active: true}, {name: 'Contact', active: false}]});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me', nav: [{name: 'Home', active: false}, {name: 'Portfolio', active: false}, {name: 'Adventures', active: false}, {name: 'Resume', active: false}, {name: 'Contact', active: true}]});
});

router.post('/thanks', function(req, res){
   console.log(req.body);
   res.send("recieved your request!");
});

module.exports = router;
