const ExpressRouter = require('express');
const router        = ExpressRouter();
const controller    = require('../controller/AttributeController');

router.get('/all', controller.getAll);

router.get('/:id', controller.get);

module.exports = router;