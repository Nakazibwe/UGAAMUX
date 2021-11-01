/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
const express = require('express');
const passport = require('passport');

const router = express.Router();

// Route to the login in page.
router.get('/login', (req, res) => {
  res.render('login');
});

// Route to send data from the login page.
// router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), (req, res) => {
//     console.log(req.body);

//     res.redirect('/artistinfo/artistsaccount');
// });
router.post('/login', passport.authenticate('local', { failureRedirect: '/login', successRedirect: '/artistinfo/artistsaccount' }), (req, res, next) => {
  (req, res, next);
  // res.redirect('/artistinfo/artistsaccount');
  console.log(req.body);
});

module.exports = router;
