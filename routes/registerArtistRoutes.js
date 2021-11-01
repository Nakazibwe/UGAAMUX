/* eslint-disable object-shorthand */
/* eslint-disable no-unreachable */
/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const ArtistsReg = require('../models/artistRegModel');

const router = express.Router();

// Route to the registrationform of artists
router.get('/artistregistrationform', (req, res) => {
  res.render('artistregform');
});

// Instatiation of storage
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
    artistReg.pictureupload = req.file.path;
    console.log(artistReg);
    console.log('This is the image you want to upload', req.file);
    await ArtistsReg.register(artistReg, req.body.password, (err) => {
      if (err) {
        throw err;
        console.log('Data has not been posted', err);
      }
      // res.redirect('/artistinfo/artistregistrationform');
      res.redirect('/registrationpage');
    });
  } catch (err) {
    res.status(400).send('Sorry! Data was not sent to DB');
    console.log(err);
  }
});

// Route to go  to the  Ugaamux artist account.
// router.get('/artistpersonalaccount', async (req, res) => {
//   // if (req.session.user) {
//     try {
//       const users = await ArtistsReg.find();
//       // console.log(users);
//       res.render('artistaccount', { users });
//       // console.log('These are my artists', artists)
//     } catch {
//       res.status(400).send('Unable to find artist');
//     }

//   // } else {
//   //   res.redirect('/login');
//   // }
// });
router.get('/artistpersonalaccount', async (req, res) => {
  if (req.session.user) {
    try {
      // const user = await ArtistsReg.findOne({ email: req.body.email });
      // console.log(users);
      res.render('artistaccount', { user: req.user });
    // console.log('These are my artists', artists)
    } catch {
      res.status(400).send('Unable to find artist');
    }
  } else {
    res.redirect('/login');
  }
});

module.exports = router;
