/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
require('dotenv').config();
const Contactus = require('../models/contactUsModel');

const router = express.Router();

// Route to  get the contactus page (contactus.html)
router.get('/contactUs', (req, res) => {
  res.render('contactUs');
});
// Route to post contact information to be emailed to  clerk .
router.post('/contactUs', (req, res) => {
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
    subject: ' EMAIL WITH  UGAAMUX CONTACTUS DETAILS ',
    html: `<html><body><p>Firstname : ${req.body.firstname}</p><p>Lastname : ${req.body.lastname}</p><p> Email : ${req.body.email}</p><p>Message : ${req.body.message}</p></body></html>`,
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
  res.redirect('/contactinfo/contactUs');
});

// Exporting the router to be used elsewhere.
module.exports = router;
