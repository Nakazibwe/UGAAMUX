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
    saveUninitialized: false,
  });
// Requiring the database models and schemers.
const ArtistsReg = require('./models/artistRegModel');
const BandReg = require('./models/bandRegModel');
const ClerkReg = require('./models/clerkRegModel');
const ComedianReg = require('./models/comedianRegModel');
const Contactus = require('./models/contactUsModel');
const RegMessage = require('./models/registerMessageModel');
const ForgotPassword = require('./models/forgotpasswdModel');

// Requiring the different routes.
const artistRegRoutes = require('./routes/registerArtistRoutes');
const comedianRegRoutes = require('./routes/registerComediansRoutes');
const bandRegRoutes = require('./routes/registerBandsRoutes');
const contactUsRoutes = require('./routes/contactUsRoutes');
const registerMessageRoutes = require('./routes/registerMessageRoutes');
const clerkRegRoutes = require('./routes/registerClerksRoutes');
const forgotpasswdRoutes = require('./routes/forgotPasswordRoutes');


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
app.use('/public/imagefiles', express.static(__dirname + '/public/imagefiles'));
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

passport.use(ArtistsReg.createStrategy());
passport.serializeUser(ArtistsReg.serializeUser());
passport.deserializeUser(ArtistsReg.deserializeUser());


   

// Routes for the project.
// Routes to the register artist pages.
app.use('/artistinfo', artistRegRoutes);

// Routes to the register comedian pages.
app.use('/comedianinfo', comedianRegRoutes);

// Routes to the register band pages.
app.use('/bandinfo', bandRegRoutes);

// Routes to the contactus page .
app.use('/contactinfo', contactUsRoutes);

// Routes to the register messages pages.
app.use('/registerrequest', registerMessageRoutes);

// Routes to the clerk registrations .
app.use('/clerkinfo', clerkRegRoutes);

// Routes to the forgotpassword pages.
app.use('/passwordreset', forgotpasswdRoutes);

// Route to  get the landing page (index.html).
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Route to get to the about Us page. 
app.get('/aboutUs', (req, res) => {
    res.sendFile(__dirname + '/views/aboutUs.html');
});

// Route to get to the Artists Page.
app.get('/artists', (req, res) => {
    res.render('artists');
});

// Route to go to the Ugaamux private comedian account.
app.get('/comedianaccount', (req, res) => {
    res.render('comedianaccount');
});

// Route to go the Ugaamux private  band account.
app.get('/bandaccount', (req, res) => {
    res.render('bandaccount');
});

// Route to get to the comedians Page.
app.get('/comedians', (req, res) => {
    res.render('comedians');
});

// Route to get the bands page.
app.get('/bands', (req, res) => {
    res.render('bands');
});

// Route to the login in page.
app.get('/login', (req, res) => {
    res.render('login'); 
});
// Route to post data from the login page.
app.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), (req, res) => {
    console.log(req.body);

    res.redirect('/artistinfo/artistsaccount');
});

// Route to the dashbord  for clerk to register all creatives .
app.get('/registrationpage', (req, res) => {
    res.sendFile(__dirname + '/views/registrationpage.html');
});

















// Final route, no route after this.
app.get('*', (req, res) => {
    res.status(404).send('Page Not Available ');
});
// Server
app.listen(port, () => {
    console.log(`We are listening on port : ${port}`);
});
