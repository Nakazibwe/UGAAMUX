/* eslint-disable no-unreachable */
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
router.post('/forgotpassword', async (req, res) => {
  console.log(req.body);
  try {
    const forgotPassword = new ForgotPassword(req.body);
    // console.log(forgotPassword);
    await ForgotPassword.save(forgotPassword, (err) => {
      if (err) {
        throw err;
        console.log('Data has not been posted', err);
      }
      res.redirect('/passwordreset/forgotpassword');
    });
  } catch (err) {
    res.status(400).send('Sorry! Data was not sent to DB');
    console.log(err);
  }
});






module.exports = router;


