/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-path-concat */
/* eslint-disable prefer-template */
const express = require('express');
const mongoose = require('mongoose');
const ComedianReg = require('../models/comedianRegModel');

const router = express.Router();

// Route to the comedians registration page.
router.get('/comedianregistrationform', (req, res) => {
  res.render('comedianregform');
});

// Route to post from  comedians registration page.
router.post('/comedianregistrationform', (req, res) => {
  console.log(req.body);
});

module.exports = router; 
