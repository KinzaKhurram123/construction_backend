const express = require('express');
const { route } = require('./authRoutes');

const router = express.Router()


router.post('/add_company', adddCompany);

module.exports = router;