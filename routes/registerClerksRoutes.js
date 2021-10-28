/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const ClerkReg = require('../models/clerkRegModel');

const router = express.Router();
// Route to go the clerk registration page.
router.get('/clerkregistrationform', (req, res) => {
  res.render('clerkregform');
});
router.post('/clerkregistrationform', (req, res) => {
  console.log(req.body);
});

module.exports = router;
