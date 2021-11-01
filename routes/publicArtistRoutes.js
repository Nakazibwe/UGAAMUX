/* eslint-disable no-multiple-empty-lines */
/* eslint-disable eol-last */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
const express = require('express');


const router = express.Router();

// Route to get to the Artists Page.
router.get('/artists', (req, res) => {
  res.render('artists');
});



module.exports = router;