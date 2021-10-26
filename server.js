/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */
/* eslint-disable import/extensions */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable prefer-template */
/* eslint-disable no-path-concat */
/* eslint-disable indent */
/* eslint-disable import/newline-after-import */
// Dependencies
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
  });

const ArtistsReg = require('./models/artistRegModel');


const artistRegRoutes = require('./routes/registerArtistRoutes');
const comedianRegRoutes = require('./routes/registerComediansRoutes');




const Contactus = require('./models/contactUsModel');
const RegMessage = require('./models/registerMessageModel');



const ForgotPassword = require('./models/forgotpasswdModel');

require('dotenv').config();
// Instatiations
const app = express();
// PORT.
const port = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,

});

mongoose.connection
    .on('open', () => {
        console.log('Mongoose connection open');
    })
    .on('error', (err) => {
        console.log(`Connection error: ${err.message}`);
    });

// Configurations
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middle-ware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

passport.use(ArtistsReg.createStrategy());
passport.serializeUser(ArtistsReg.serializeUser());
passport.deserializeUser(ArtistsReg.deserializeUser());




// Routes
// Routes to the register artist pages.
app.use('/registerartist', artistRegRoutes);

// Routes to the register comedian pages.
app.use('/registercomedian', comedianRegRoutes);



// Route to  get the landing page (index.html)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});


// module.exports = router;

// Route to get to the about Us page.
app.get('/aboutUs', (req, res) => {
    res.sendFile(__dirname + '/views/aboutUs.html');
});

// Route to get to the Artists Page.
app.get('/artists', (req, res) => {
    res.sendFile(__dirname + '/views/artists.html');
});

// Route to get to the comedians Page.
app.get('/comedians', (req, res) => {
    res.sendFile(__dirname + '/views/comedians.html');
});

// Route to get the bands page.
app.get('/bands', (req, res) => {
    res.sendFile(__dirname + '/views/bands.html');
});

// Route to  get the contactus page (contactus.html)
app.get('/contactUs', (req, res) => {
    res.sendFile(__dirname + '/views/contactUs.html');
});

// Route to post data from the contactus form on the page.
app.post('/contactUs', (req, res) => {
    console.log(req.body);
});

// Route to the login in page.
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});
// Route to post data from the login page.
app.post('/login', (req, res) => {
    console.log(req.body);
});

// Route to the forgot password page.
app.get('/forgotpassword', (req, res) => {
    res.sendFile(__dirname + '/views/forgotpassword.html');
});

// Route to post data from the forgot password page.
app.post('/forgotpassword', (req, res) => {
    console.log(req.body);
});

// Route to the register message page.
app.get('/registermessage', (req, res) => {
    res.sendFile(__dirname + '/views/registermessage.html');
});

// Route to post data from the register message page.
app.post('/registermessage', (req, res) => {
    console.log(req.body);
});
// Route to the register page for clerk
app.get('/registrationpage', (req, res) => {
    res.sendFile(__dirname + '/views/registrationpage.html');
});




// Route to the bands registration page.
app.get('/bandregistrationform', (req, res) => {
    res.sendFile(__dirname + '/views/bandregform.html');
});

// Route to post from  band registration page.
app.post('/bandregistrationform', (req, res) => {
    console.log(req.body);
});
// Route to go  to the  Ugaamux artist account.
app.get('/artistaccount', (req, res) => {
    res.sendFile(__dirname + '/views/artistaccount.html');
});

// Route to go to the Ugaamux comedian account.
app.get('/comedianaccount', (req, res) => {
    res.sendFile(__dirname + '/views/comedianaccount.html');
});

// Route to go the Ugaamux band account.
app.get('/bandaccount', (req, res) => {
    res.sendFile(__dirname + '/views/bandaccount.html');
});




























// Final route, no route after this.
app.get('*', (req, res) => {
    res.status(404).send('Page Not Available ');
});
// Server
app.listen(port, () => {
    console.log(`We are listening on port : ${port}`);
});
