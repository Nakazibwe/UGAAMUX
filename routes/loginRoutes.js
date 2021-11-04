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
  // Login logic for the different users of the system .
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
  // const userrole = roles[req.user.role];
  // if (userrole == 'artist') {
  //   res.redirect('/artistinfo/artistpersonalaccount');
  // }
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

router.post('/deleteartist', async (req, res) => {
  if (req.session.user) {
    try {
      await ArtistsReg.deleteOne({ _id: req.body.id });
      await User.deleteOne({ _id: req.body.id });
      res.redirect('back');
    } catch (err) {
      res.send('You are unable to delete an artist ', err);
    }
  } else {
    console.log('cant find session');
    res.redirect('/login');
  }
});

router.post('/deletecomedian', async (req, res) => {
  if (req.session.user) {
    try {
      await ComedianReg.deleteOne({ _id: req.body.id });
      await User.deleteOne({ _id: req.body.id });
      res.redirect('back');
    } catch (err) {
      res.send('You are unable to delete a comedian ', err);
    }
  } else {
    console.log('cant find session');
    res.redirect('/login');
  }
});

router.post('/deleteband', async (req, res) => {
  if (req.session.user) {
    try {
      await BandReg.deleteOne({ _id: req.body.id });
      await User.deleteOne({ _id: req.body.id });
      res.redirect('back');
    } catch (err) {
      res.send('You are unable to delete a band ', err);
    }
  } else {
    console.log('cant find session');
    res.redirect('/login');
  }
});

// router.get('/admindashboard', async (req, res) => {
//   try {
//     const artists = await ArtistsReg.find();
//     const bands = await BandReg.find();
//     const comedians = await ComedianReg.find();
//     const clerks = await ClerkReg.find();
//     // console.log(artists);
//     // console.log(bands);
//     // console.log(comedians);
//     // console.log(clerks);
//     res.render('admindashboard',
//       {
//         artists: artists,
//         comedians: comedians,
//         clerks: clerks,
//         bands: bands,
//       });
//   } catch {
//     res.status(400).send('Unable to find artist');
//   }
// });

router.get('/updateartist', async (req, res) => {
  // if (req.session.user) {
  try {
    // const artists = await ArtistsReg.updateOne({ _id: req.body.id });
    // const users = await User.updateOne({ _id: req.body.id });
    res.render('updateartist');
  } catch {
    res.status(400).send('Unable to update  artist');
  }
  // } else {
  //   console.log('cant find session');
  //   res.redirect('/login');
  // }
});

module.exports = router;
