/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const RegMessage = require('../models/registerMessageModel');

const router = express.Router();

// Route to the register message page.
router.get('/registermessage', (req, res) => {
  res.render('registermessage');
});

// Route to post data from the register message page.
router.post('/registermessage', (req, res) => {
  console.log(req.body);
});

router.post('/registermessage', async (req, res) => {
  console.log(req.body);
  try {
    const regMessage = new RegMessage(req.body);
    console.log(regMessage);

    await RegMessage.save(regMessage, (err) => {
      if (err) {
        throw err;
        console.log('Data has not been posted', err);
      }
      res.redirect('/registerrequest/registermessage');
    });
  } catch (err) {
    res.status(400).send('Sorry! Data was not sent to DB');
    console.log(err);
  }
});

module.exports = router;
