const express = require('express');
const router = express.Router();
//import controller
const customerController = require('./../controllers/CustomerController');

router.get('/usuario/index',customerController.index);
router.get('/usuario/form',customerController.index);
router.get('/usuario/list',customerController.index);
router.get('/usuario/edit/:id',customerController.index);

module.exports = router;
