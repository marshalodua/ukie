const ExpressRouter = require('express');
const router        = ExpressRouter();
const controller    = require('../controller/UserController');
const userHandler   = require('../middleware/UserHandler');

router.post('/login', controller.login);

router.post('/auth', controller.auth);

router.get('/:token/all', userHandler, controller.getAll);

module.exports = router;