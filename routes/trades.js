const express = require('express');
const router = express.Router();
const tradesController = require('../controllers/trades');

router.get('/', tradesController.list);
router.post('/', tradesController.create);
router.route('/:id').all(tradesController.entity);


module.exports = router;
