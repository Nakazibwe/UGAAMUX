/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-path-concat */
/* eslint-disable prefer-template */
const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const ForgotPassword = require('../models/forgotpasswdModel');

// Route to the forgot password page.
router.get('/forgotpassword', (req, res) => {
  res.render('forgotpassword');
});

// Route to post data from the forgot password page.
router.post('/forgotpassword', (req, res) => {
  console.log(req.body);
});







module.exports = router;


