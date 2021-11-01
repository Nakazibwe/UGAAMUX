/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-path-concat */
/* eslint-disable prefer-template */
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const ComedianReg = require('../models/comedianRegModel');

const router = express.Router();

// Route to the comedians registration page.
router.get('/comedianregistrationform', (req, res) => {
  res.render('comedianregform');
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

// Route to post from  comedians registration page.
router.post('/comedianregistrationform', upload.single('uploadedpicture'), async (req, res) => {
  console.log(req.body);
  try {
    const comedianReg = new ComedianReg(req.body);
    comedianReg.uploadedpicture = req.file.path;
    console.log(comedianReg);
    console.log('This is the image you want to upload', req.file);
    await ComedianReg.register(comedianReg, req.body.password, (err) => {
      if (err) {
        throw err;
        console.log('Data has not been posted', err);
      }
      // res.redirect('/comedianinfo/comedianregistrationform');
      res.redirect('/registrationpage');
    });
  } catch (err) {
    res.status(400).send('Sorry! Data was not sent to DB');
    console.log(err);
  }
});


// Route to go  to the  Ugaamux private comedian account.
router.get('/comedianaccount', async (req, res) => {
  if (req.session.user) {
    try {
      const users = await ComedianReg.find();
      res.render('comedianaccount', { comedians: users });
    } catch {
      res.status(400).send('Unable to find comedian');
    }
  } else {
    res.redirect('/login');
  }
});

module.exports = router;
