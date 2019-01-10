var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // console.log('Cookies: ', req.cookies);
  //已登录
  if(req.cookies.username){
    res.redirect('/');
  } else {
    res.render('login');
  }
});
router.post('/', function (req, res, next) {
  console.log(req.body)
  const username = req.body.username;
  const password = req.body.password;
  var flag = true; //查数据库为true
  if (flag) {
    res.cookie("name", username);
		res.redirect("/");
  } else {
    res.render('login');
  }
})

module.exports = router;
