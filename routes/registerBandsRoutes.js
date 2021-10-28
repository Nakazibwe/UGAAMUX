/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-path-concat */
/* eslint-disable prefer-template */
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const BandReg = require('../models/bandRegModel');

const router = express.Router();

// Route to the bands registration form  page.
router.get('/bandregistrationform', (req, res) => {
  res.render('bandregform');
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

// Route to post from  band registration page.
router.post('/bandregistrationform', upload.single('Profilepicture'), upload.single('icon'), async (req, res) => {
  console.log(req.body);
  try {
    const bandReg = new BandReg(req.body);
    bandReg.Profilepicture = req.file.path;
    bandReg.icon = req.file.path;
    console.log(bandReg);
    console.log('This is the image you want to upload', req.file);
    await BandReg.register(bandReg, req.body.password, (err) => {
      if (err) {
        throw err;
        console.log('Data has not been posted', err);
      }
      res.redirect('/bandinfo/bandregistrationform');
    });
  } catch (err) {
    res.status(400).send('Sorry! Data was not sent to DB');
    console.log(err);
  }
});

// Route to go the Ugaamux private  band account.
router.get('/bandaccount', async (req, res) => {
  if (req.session.user) {
    try {
      const users = await BandReg.find();
      res.render('bandaccount', { bands: users });
    } catch {
      res.status(400).send('Unable to find band');
    }
  } else {
    res.redirect('/login');
  }
});

module.exports = router;
