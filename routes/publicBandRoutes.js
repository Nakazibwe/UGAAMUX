/* eslint-disable key-spacing */
/* eslint-disable object-shorthand */
/* eslint-disable no-undef */
/* eslint-disable no-empty */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable eol-last */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
const express = require('express');
const BandReg = require('../models/bandRegModel');

const router = express.Router();

// Route to get the bands page and querrying data on it.
router.get('/bands', async (req, res) => {
  try {
    let users = await BandReg.find();
    if (req.query.BandName) {
      users = await BandReg.find({ BandName: req.query.BandName });
    } else if (req.query.twitter) {
      users = await BandReg.find({ twitter: req.query.twitter });
    }
    res.render('bands', { bands:users });
  } catch (err) {
    res.status(400).send('Band  is Unavailable', err);
  }
});



// Exporting a router.
module.exports = router;