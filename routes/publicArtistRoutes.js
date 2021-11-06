/* eslint-disable no-multiple-empty-lines */
/* eslint-disable eol-last */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
const express = require('express');

const router = express.Router();
const ArtistsReg = require('../models/artistRegModel');

// Route to get to the Artists Page.
router.get('/artists', async (req, res) => { 
  try {
    let users = await ArtistsReg.find();
    if (req.query.stageName) {
      users = await ArtistsReg.find({ stageName: req.query.stageName });
    } else if (req.query.twitter) {
      users = await ArtistsReg.find({ twitter: req.query.twitter });
    }
    res.render('artists', { artists: users });
  } catch (err) {
    res.status(400).send('Artist is Unavailable', err);
  }
});



module.exports = router;