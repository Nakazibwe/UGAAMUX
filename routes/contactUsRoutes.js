/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const Contactus = require('../models/contactUsModel');

const router = express.Router();

// Route to  get the contactus page (contactus.html)
router.get('/contactUs', (req, res) => {
  res.render('contactUs');
});

// Route to post data from the contactus form on the page.
router.post('/contactUs', (req, res) => {
  console.log(req.body);
});

module.exports = router;  
