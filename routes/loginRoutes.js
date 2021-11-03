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

const router = express.Router();

// Route to the login in page.
router.get('/login', (req, res) => {
  res.render('login');
});
// Route to login .
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
        res.redirect('/');
      }
    })
    .catch((err) => { console.log(err); });
});

module.exports = router;
