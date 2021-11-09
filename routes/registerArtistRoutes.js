/* eslint-disable arrow-parens */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable object-shorthand */
/* eslint-disable no-unreachable */
/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const ArtistsReg = require('../models/artistRegModel');
const User = require('../models/UserModel');

const router = express.Router();

// Route to the registrationform of artists
router.get('/artistregistrationform', (req, res) => {
  res.render('artistregform');
});

// Instatiation of storage for image files.
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/imagefiles');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

// Route to post the data from the artist registrationform page.
router.post('/artistregistrationform', upload.single('pictureupload'), async (req, res) => {
  console.log(req.body);
  try {
    const artistReg = new ArtistsReg(req.body);
    const user = new User(req.body);
    artistReg.pictureupload = req.file.path;

    await artistReg.save();
    await User.register(user, req.body.password, (err) => {
      if (err) {
        throw err;
      }

      res.redirect('/clerkinfo/creativesregistration');
    });
  } catch (err) {
    res.status(400).send('Sorry! Data was not sent to DB');
    console.log(err);
  }
});

// Route to go  to the  Ugaamux personal artist account.
router.get('/artistpersonalaccount', async (req, res) => {
  if (req.session.user) {
    try {
      const user = await ArtistsReg.findOne({ email: req.user.email });
      // console.log(users);
      res.render('artistaccount', { artist: user });
      // console.log('These are my artists', artists)
    } catch {
      res.status(400).send('Unable to find artist');
    }
  } else {
    res.redirect('/login');
  }
});

// Exporting the router .
module.exports = router;
