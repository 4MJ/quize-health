var express = require('express');
var router = express.Router();
const fs =require('fs');
const formidable = require("formidable");

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

/*Adding a patient's detail*/
router.post('/patient/add', (req, res, next)=>{
  const form = formidable({multiples: true});

  form.parse(req,(err, fields)=>{
    if(err){
      next(err);
      return;
    }
    var patient_name = fields.inputName;

    //storing data
    
  });
})


module.exports = router;
