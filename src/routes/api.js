const express = require('express');
const router = express.Router();
//import controller
const customerController = require('./../controllers/CustomerController');

router.get('/usuario/test', customerController.testApi);
router.post('/usuario/create', customerController.create);
router.get('/usuario/list', customerController.list);
router.get('/usuario/get/:id', customerController.get);
router.put('/usuario/update/:id', customerController.update);
router.delete('/usuario/delete/:id', customerController.delete);

module.exports = router;
