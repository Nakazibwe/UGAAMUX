/* eslint-disable prefer-template */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable eol-last */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
const express = require('express');
const Sequelize = require('sequelize');

const Op = Sequelize.Op;
const router = express.Router();
const ArtistsReg = require('../models/artistRegModel');



// Route to get to the Artists Page.
router.get('/artists', async (req, res) => {
  try {
    let users = await ArtistsReg.find();
    if (req.query.search) {
      console.log(req.query.search[0]);
      users = await ArtistsReg.find({ stageName: req.query.search });
    }
    res.render('artists', { artists: users });
  } catch (err) {
    res.status(400).send('Artist is Unavailable', err);
  }
});

// router.get('/artists', (req, res) => {
//   const { stagename } = req.query;
//   ArtistsReg.find({ where: { stageName: { [Op.like]: term } } })
//     .then((artists) => res.render('artists', { artists }))
//     .catch((err) => console.log(err));
// });


module.exports = router;