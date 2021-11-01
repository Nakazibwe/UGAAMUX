/* eslint-disable no-multiple-empty-lines */
/* eslint-disable eol-last */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
const express = require('express');

const router = express.Router();
// Route to get the bands page.
router.get('/bands', (req, res) => {
  res.render('bands');
});




module.exports = router;