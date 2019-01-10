var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //登录跳转
  // console.log('Cookies: ', req.cookies);
  if(req.cookies.name){
    res.render('index', { title: 'Hello stanger',username: req.cookies.name});
  }else{
    res.redirect("/login");
  }
});
router.get('/logout', function (req, res, next) {
  req.cookies.name = '';
  res.redirect("/login");
});
  
module.exports = router;
