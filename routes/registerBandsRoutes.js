/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-path-concat */
/* eslint-disable prefer-template */
const express = require('express');
const mongoose = require('mongoose');
const BandReg = require('../models/bandRegModel');

const router = express.Router();

// Route to the bands registration page.
router.get('/bandregistrationform', (req, res) => {
  res.render('bandregform');
});

// Route to post from  band registration page.
router.post('/bandregistrationform', (req, res) => {
  console.log(req.body);
});

module.exports = router; 
