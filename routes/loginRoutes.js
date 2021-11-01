/* eslint-disable eqeqeq */
/* eslint-disable space-infix-ops */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
const express = require('express');
const passport = require('passport');
const ArtistsReg = require('../models/artistRegModel');

const router = express.Router();

// Route to the login in page.
router.get('/login', (req, res) => {
  res.render('login');
});
// Route to login .
router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), async (req, res) => {
  req.session.user = req.user;
  const user = await ArtistsReg.findOne({ email: req.body.email });
  if (user.email == req.body.email) {
    res.redirect('/artistinfo/artistpersonalaccount');
  }
  
 
});

module.exports = router;
