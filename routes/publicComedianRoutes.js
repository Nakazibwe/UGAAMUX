/* eslint-disable no-multiple-empty-lines */
/* eslint-disable eol-last */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
const express = require('express');
const ComedianReg = require('../models/comedianRegModel');

const router = express.Router();
// Route to get to the comedians Page and query data.
router.get('/comedians', async (req, res) => {
  try {
    let users = await ComedianReg.find();
    if (req.query.stagename) {
      users = await ComedianReg.find({ stagename: req.query.stagename });
    } else if (req.query.twitter) {
      users = await ComedianReg.find({ twitter: req.query.twitter });
    }
    res.render('comedians', { comedians: users });
  } catch (err) {
    res.status(400).send('Comedian  is Unavailable', err);
  }
});

// Exporting the router
module.exports = router;