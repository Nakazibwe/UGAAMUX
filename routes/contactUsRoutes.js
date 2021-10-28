/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');

const Contactus = require('../models/contactUsModel');

const router = express.Router();

// Route to  get the contactus page (contactus.html)
router.get('/contactUs', (req, res) => {
  res.render('contactUs');
});

// Route to post data from the contactus form on the page.
router.post('/contactUs', async (req, res) => {
  console.log(req.body);
  try {
    const contactus = new Contactus(req.body);
    console.log(contactus);
    await Contactus.save(contactus, (err) => {
      if (err) {
        throw err;
        console.log('Data has not been posted', err);
      }
      res.redirect('/contactinfo/contactUs');
    });
  } catch (err) {
    res.status(400).send('Sorry! Data was not sent to DB');
    console.log(err);
  }
});

module.exports = router;
