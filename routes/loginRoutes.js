/* eslint-disable no-underscore-dangle */
/* eslint-disable object-shorthand */
/* eslint-disable no-empty */
/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
/* eslint-disable space-infix-ops */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
const express = require('express');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const connect = require('connect');
const ArtistsReg = require('../models/artistRegModel');
const ComedianReg = require('../models/comedianRegModel');
const BandReg = require('../models/bandRegModel');
const ClerkReg = require('../models/clerkRegModel');
const User = require('../models/UserModel');
const roles = require('./roles');

const router = express.Router();

// Route to the login in page.
router.get('/login', (req, res) => {
  res.render('login');
});
// Route to login  post request.
router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), async (req, res) => {
  req.session.user = req.user;
  // Login logic for the different users of the system and their roles.
  User.findOne({ email: req.body.email })
    .then((data) => {
      // console.log(data);
      if (data.role == 'artist') {
        res.redirect('/artistinfo/artistpersonalaccount');
      } else if (data.role == 'comedian') {
        res.redirect('/comedianinfo/comedianaccount');
      } else if (data.role == 'band') {
        res.redirect('/bandinfo/bandaccount');
      } else if (data.role == 'clerk') {
        res.redirect('/clerkinfo/creativesregistration');
      } else {
        res.send(' You are not an authorized  UGAAMUX user ');
      }
    })
    .catch((err) => { console.log(err); });
});

// Logout route for all pages.
router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

// Route for deleting an artist on the clerk dashboard .
router.post('/deleteartist', async (req, res) => {
  if (req.session.user) {
    try {
      await ArtistsReg.deleteOne({ email: req.body.id });
      await User.deleteOne({ email: req.body.id });
      res.redirect('back');
    } catch (err) {
      res.send('You are unable to delete an artist ', err);
    }
  } else {
    console.log('cant find session');
    res.redirect('/login');
  }
});
// Route for deleting a comedian  on the clerk dashboard .
router.post('/deletecomedian', async (req, res) => {
  if (req.session.user) {
    try {
      await ComedianReg.deleteOne({ email: req.body.id });
      await User.deleteOne({ email: req.body.id });
      res.redirect('back');
    } catch (err) {
      res.send('You are unable to delete a comedian ', err);
    }
  } else {
    console.log('cant find session');
    res.redirect('/login');
  }
});

// Route for deleting a band on the clerk dashboard.
router.post('/deleteband', async (req, res) => {
  if (req.session.user) {
    try {
      await BandReg.deleteOne({ email: req.body.id });
      await User.deleteOne({ email: req.body.id });
      res.redirect('back');
    } catch (err) {
      res.send('You are unable to delete a band ', err);
    }
  } else {
    console.log('cant find session');
    res.redirect('/login');
  }
});

// Route for getting the form for  updating an artist on the clerk dashboard.
router.get('/updateartist/:id', async (req, res) => {
  const artist = await ArtistsReg.findById(req.params.id);
  res.render('updateartist', { artist: artist });
});

// Route for posting the updated artist form from the dashboard.
router.post('/updateartist/:email', async (req, res) => {
  if (req.session.user) {
    try {
      const artist = await ArtistsReg.updateOne({ email: req.params.email }, req.body);
      const user = await User.updateOne({ email: req.params.email }, { email: req.body.email });
      res.redirect('/clerkinfo/admindashboard');
      console.log(artist);
      console.log(user);
    } catch {
      res.status(400).send('Unable to update  artist');
    }
  } else {
    console.log('cant find session');
    res.redirect('/login');
  }
});

// Route for getting the form for  updating a comedian on the clerk dashboard.
router.get('/updatecomedian/:id', async (req, res) => {
  const comedian = await ComedianReg.findById(req.params.id);
  res.render('updatecomedian', { comedian: comedian });
});

// Route for posting the updated comedian form from the dashboard.
router.post('/updatecomedian/:email', async (req, res) => {
  if (req.session.user) {
    try {
      const comedian = await ComedianReg.updateOne({ email: req.params.email }, req.body);
      const user = await User.updateOne({ email: req.params.email }, { email: req.body.email });
      res.redirect('/clerkinfo/admindashboard');
      console.log(comedian);
      console.log(user);
    } catch {
      res.status(400).send('Unable to update  comedian');
    }
  } else {
    console.log('cant find session');
    res.redirect('/login');
  }
});

// Route for getting the update form of bands from the clerk dashboard.
router.get('/updateband/:id', async (req, res) => {
  const band = await BandReg.findById(req.params.id);
  res.render('updateband', { band: band });
});

// Route for posting the updated ionformation from the form.
router.post('/updateband/:email', async (req, res) => {
  if (req.session.user) {
    try {
      const band = await BandReg.updateOne({ email: req.params.email }, req.body);
      const user = await User.updateOne({ email: req.params.email }, { email: req.body.email });
      res.redirect('/clerkinfo/admindashboard');
      console.log(band);
      console.log(user);
    } catch {
      res.status(400).send('Unable to update  band');
    }
  } else {
    console.log('cant find session');
    res.redirect('/login');
  }
});

// Exporting router
module.exports = router;
