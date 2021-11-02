// /* eslint-disable func-names */
// /* eslint-disable no-unused-vars */
// const LocalStrategy = require('passport-local').Strategy;
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// // Load ArtistReg Model.
// const ArtistsReg = require('../models/artistRegModel');

// module.exports = function (passport) {
//     passport.use(
//         new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
//             // Match User.
//             ArtistsReg.findOne({ email })
//                 .then((artist) => {
//                     if (!artist) {
//                         return done(null, false, { message: 'Email is not registered' });
//                     }
//                     // Match password.
//                     bcrypt.compare(password, artist.password, (err, isMatch) => {
//                         if (err) throw err;

//                         if (isMatch) {
//                             return done(null, artist);
//                         }
//                         return done(null, false, { message: 'Password Incorrect' });
//                     });

//                 });
//         // .catch ((err) => console.log(err));
// })
//   );
// passport.serializeUser((artist, done) => {
//     done(null, artist.id);
// });

// passport.deserializeUser((id, done) => {
//     ArtistsReg.findById(id, (err, artist) => {
//         done(err, artist);
//     });
// });
// };
