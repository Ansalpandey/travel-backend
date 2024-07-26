const express = require('express');
const router = express.Router();

const {createQuery, getQueries} = require('../controller/contact.controller');

router.post('/contact', createQuery);

router.get('/contact', getQueries);

module.exports = router;