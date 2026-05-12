const express = require('express');
const router = express.Router();
const bouquetController = require('../controllers/bouquetController');

router.get('/', bouquetController.getAllBouquets);

module.exports = router;