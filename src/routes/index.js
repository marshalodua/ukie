const ExpressRouter = require('express');
const router        = ExpressRouter();

const supplier      = require('./SupplierRoute');
const category      = require('./CategoryRoute');

router.use('/supplier', supplier);
router.use('/category', category);

module.exports = router;