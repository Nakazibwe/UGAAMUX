/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const RegMessage = require('../models/registerMessageModel');

const router = express.Router();

// Route to the register message page.
router.get('/registermessage', (req, res) => {
  res.render('registermessage');
});

// Route to post data from the register message page.
router.post('/registermessage', (req, res) => {
  console.log(req.body);
});

module.exports = router;
