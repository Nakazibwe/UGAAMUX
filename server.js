/* eslint-disable no-empty */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
/* eslint-disable object-shorthand */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
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
const pug = require('pug');
const mongoose = require('mongoose');
const passport = require('passport');
const passportmongoose = require('passport-local-mongoose');
const flash = require('connect-flash');
const moment = require('moment');

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
const User = require('./models/UserModel');

// Requiring the different routes.
const artistRegRoutes = require('./routes/registerArtistRoutes');
const comedianRegRoutes = require('./routes/registerComediansRoutes');
const bandRegRoutes = require('./routes/registerBandsRoutes');
const contactUsRoutes = require('./routes/contactUsRoutes');
const registerMessageRoutes = require('./routes/registerMessageRoutes');
const clerkRegRoutes = require('./routes/registerClerksRoutes');
const forgotpasswdRoutes = require('./routes/forgotPasswordRoutes');
const loginRoutes = require('./routes/loginRoutes');
const publicArtistRoutes = require('./routes/publicArtistRoutes');
const publicComedianRoutes = require('./routes/publicComedianRoutes');
const publicBandRoutes = require('./routes/publicBandRoutes');
  


// const basicAuth = require('./permissions/basicAuthentication')(passport);


    
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
app.locals.moment = moment;


// Middle-ware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public/imagefiles', express.static(__dirname + '/public/imagefiles'));
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Global Vars 
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
});

// Users  Strategy
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Routes for the  entire project.

// Route to  get the landing page (index.html).
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
 });

// Route to get to the about Us page.
app.get('/aboutUs', (req, res) => {
    res.sendFile(__dirname + '/views/aboutUs.html');
});

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

// Routes to the login page. 
app.use('/', loginRoutes);

// Routes to the artist public pages. 
app.use('/', publicArtistRoutes);

// Routes to the comedian public pages . 
app.use('/', publicComedianRoutes);

// Routes to the band public pages . 
app.use('/', publicBandRoutes);



















// Final route, no route after this.
app.get('*', (req, res) => {
    res.status(404).send('Page Not Available ');
});
// Server
app.listen(port, () => {
    console.log(`We are listening on port : ${port}`);
});
