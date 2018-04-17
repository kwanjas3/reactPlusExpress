var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, userName:"somebody"},
    {id: 2, userName:"somebody_else"}
  
  ])
});

module.exports = router;
