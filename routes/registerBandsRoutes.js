/* eslint-disable prefer-destructuring */
/* eslint-disable max-len */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-path-concat */
/* eslint-disable prefer-template */
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const BandReg = require('../models/bandRegModel');
const User = require('../models/UserModel');

const router = express.Router();

// Route to the bands registration form  page.
router.get('/bandregistrationform', (req, res) => {
  res.render('bandregform');
});

// Instatiation of storage to store image files.
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
router.post(
  '/bandregistrationform',
  upload.fields([
    { name: 'icon', maxCount: 1 },
    { name: 'Profilepicture', maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const user = new User(req.body);
      const bandReg = new BandReg(req.body);
      bandReg.icon = req.files.icon[0].path;
      bandReg.Profilepicture = req.files.Profilepicture[0].path;

      await bandReg.save();
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
    console.log(req.body);
  },
);

// Route to go the Ugaamux private  band account.
router.get('/bandaccount', async (req, res) => {
  if (req.session.user) {
    try {
      const user = await BandReg.findOne({ email: req.user.email });
      res.render('bandaccount', { band: user });
    } catch {
      res.status(400).send('Unable to find band');
    }
  } else {
    res.redirect('/login');
  }
});

// Exporting router.
module.exports = router;
