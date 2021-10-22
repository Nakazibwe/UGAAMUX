/* eslint-disable prefer-template */
/* eslint-disable no-path-concat */
/* eslint-disable indent */
/* eslint-disable import/newline-after-import */
// Dependencies
const express = require('express');
const path = require('path');
const parser = require('body-parser');

// Instatiations
const app = express();
const port = 3000;

// Configurations
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine','pug');

// Middle-ware
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/contactUs', (req, res) => {
    res.sendFile(__dirname + '/views/contactUs.html');
});

app.post('/contactUs', (req, res) => {
    console.log(req.body);
});

// Final route, no route after this.
app.get('*', (req, res) => {
    res.status(404).send('Page Doesnot Exist ');
});
// Server
app.listen(port, () => {
    console.log(`We are listening on port : ${port}`);
});
