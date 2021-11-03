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

  if ((req.user.email && req.user.password.match(User)) && (req.user.email && req.user.password.match(ArtistsReg))) {
    res.redirect('/artistinfo/artistpersonalaccount');
  } if ((req.user.email && req.user.password.match(User)) && (req.user.email && req.user.password.match(ComedianReg))) {
    res.redirect('/comedianinfo/comedianaccount');
  } if ((req.user.email && req.user.password.match(User)) && (req.user.email && req.user.password.match(BandReg))) {
    res.redirect('/bandinfo/bandaccount');
  } if ((req.user.email && req.user.password.match(User)) && (req.user.email && req.user.password.match(ClerkReg))) {
    res.redirect('/clerkinfo/creativesregistration');
  }
});

module.exports = router;
