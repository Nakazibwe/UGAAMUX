/* eslint-disable no-unreachable */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-path-concat */
/* eslint-disable prefer-template */
const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
require('dotenv').config();

const router = express.Router();

const ForgotPassword = require('../models/forgotpasswdModel');

// Route to the forgot password page.
router.get('/forgotpassword', (req, res) => {
  res.render('forgotpassword');
});

// Route to post data from the forgot password page.

router.post('/forgotpassword', (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: 'nakazibwe19grace@outlook.com',
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: 'nakazibwe19grace@outlook.com',
    to: 'nakazibwe24grace@outlook.com',
    subject: ' EMAIL WITH REQUEST TO CHANGE UGAAMUX PASSWORD ',
    html: `<html><body><p> Requesting Email : ${req.body.email}</p><p>Message : Dear Admin, kindly send back email with new password to  ${req.body.email}</p></body></html>`,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(
        'There was an error in sending the email with nodejs',
      );
      console.log(err);
    } else {
      console.log(data);
      console.log(
        'Email was sent successfully',
      );
    }
  });
  // res.redirect('/passwordreset/forgotpassword');
  res.redirect('/');
});





module.exports = router;


