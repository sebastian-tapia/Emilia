var express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
router.get('/', indexController.index);
router.get('/about', indexController.about);
router.get('/music', indexController.music);
router.get('/contact', indexController.contact);
module.exports = router;
