/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const nodemailer = require('nodemailer');
require('dotenv').config();

const router = express.Router();
const RegMessage = require('../models/registerMessageModel');
// Route to the register message page.
router.get('/registermessage', (req, res) => {
  res.render('registermessage');
});
// Route to post register message to the super admin.
router.post('/registermessage', (req, res) => {
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
    subject: ' EMAIL WITH  UGAAMUX REGISTER REQUEST DETAILS ',
    html: `<html><body><p> Name : ${req.body.customername}</p><p> Email : ${req.body.customeremail}</p><p>Message : ${req.body.message}</p></body></html>`,
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

  // res.redirect('/registerrequest/registermessage');
  res.redirect('/');
});

module.exports = router;
