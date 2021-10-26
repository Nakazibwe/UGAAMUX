/* eslint-disable no-unreachable */
/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const ArtistsReg = require('../models/artistRegModel');

const router = express.Router();

// Route to the registrationform of artists
router.get('/artistregistrationform', (req, res) => {
  res.render('artistregform');
});

// Route to post the data from the artist registrationform page.

router.post('/artistregistrationform', async (req, res) => {
  console.log(req.body);
  try {
    const artistReg = new ArtistsReg(req.body);
    await ArtistsReg.register(artistReg, req.body.password, (err) => {
      if (err) {
        throw err;
        console.log('Data has not been posted', err);
      }
      res.redirect('/registerartist/artistregistrationform');
    });
  } catch (err) {
    res.status(400).send('Sorry! Data was not sent to DB');
    console.log(err);
  }
});

module.exports = router; 
