/* eslint-disable object-shorthand */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const User = require('../models/UserModel');
const ArtistsReg = require('../models/artistRegModel');
const BandReg = require('../models/bandRegModel');
const ComedianReg = require('../models/comedianRegModel');
const ClerkReg = require('../models/clerkRegModel');

const router = express.Router();
// Route to the page for clerk to register all other  creatives .
router.get('/creativesregistration', (req, res) => {
  if (req.session.user) {
    res.render('registrationpage');
  } else {
    res.redirect('/login');
  }
});

// Route to go the clerk registration page.
router.get('/clerkregistrationform', (req, res) => {
  res.render('clerkregform');
});

// Route to post data from the clerk form.
router.post('/clerkregistrationform', async (req, res) => {
  console.log(req.body);
  try {
    const user = new User(req.body);
    const clerkReg = new ClerkReg(req.body);
    console.log(clerkReg);
    await clerkReg.save();
    await User.register(user, req.body.password, (err) => {
      if (err) {
        throw err;
      }

      res.redirect('/login');
    });
  } catch (err) {
    res.status(400).send('Sorry! Data was not sent to DB');
    console.log(err);
  }
});

// Route to the dashboard for clerk to view registered creatives.
router.get('/admindashboard', async (req, res) => {
  try {
    const artists = await ArtistsReg.find();
    const bands = await BandReg.find();
    const comedians = await ComedianReg.find();
    const users = await User.find();
    res.render('admindashboard',
      {
        artists: artists,
        comedians: comedians,
        bands: bands,
        users: users,
      });
  } catch {
    res.status(400).send('Unable to find artist');
  }
});
router.post('/admindashboard', (req, res) => {

});

module.exports = router;
