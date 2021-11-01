/* eslint-disable no-unreachable */
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

// Route to the page for clerk to register all creatives .
router.get('/creativesregistration', (req, res) => {
  res.render('registrationpage');
});



// Route to post data from the clerk form.
router.post('/clerkregistrationform', async (req, res) => {
  console.log(req.body);
  try {
    const clerkReg = new ClerkReg(req.body);
    console.log(clerkReg);
    await ClerkReg.register(clerkReg, req.body.password, (err) => {
      if (err) {
        throw err;
        console.log('Data has not been posted', err);
      }
      // res.redirect('/clerkinfo/clerkregistrationform');
      res.redirect('/login');
    });
  } catch (err) {
    res.status(400).send('Sorry! Data was not sent to DB');
    console.log(err);
  }
});

module.exports = router;
