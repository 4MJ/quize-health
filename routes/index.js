var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'E-Health' });
});

/*Get register page. */
router.get('/register', (req,res)=>{
  res.render('register');
});

/*Get login page. */
router.get('/login', (req, res)=>{
  res.render('login');
})

/*Get details for a single patient*/

router.get('/patient',(req, res)=>{
  res.render('patient_history');
})


module.exports = router;
