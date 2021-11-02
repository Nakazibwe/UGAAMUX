// Route to post data from the contactus form on the page.
// router.post('/contactUs', async (req, res) => {
//   console.log(req.body);
//   try {
//     const contactus = new Contactus(req.body);
//     console.log(contactus);
//     contactus
//       .save()
//       .then((data) => {
//         console.log(data);
//         res.redirect('/contactinfo/contactUs');
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   } catch (err) {
//     res.status(400).send('Sorry! Data was not sent to DB');
//     console.log(err);
//   }
// });

// router.get('/artistpersonalaccount', async (req, res) => {
//     // if (req.session.user) {
//       try {
//         const users = await ArtistsReg.find();
//         // console.log(users);
//         res.render('artistaccount', { users });
//         // console.log('These are my artists', artists)
//       } catch {
//         res.status(400).send('Unable to find artist');
//       } 
  
//     // } else {
//     //   res.redirect('/login');
//     // }
// });
  
// Route to post the data from the artist registrationform page (New logic with hashed password)
// router.post('/artistregistrationform', upload.single('pictureupload'), async (req, res) => {
//   console.log(req.body);

//   const artistReg = new ArtistsReg(req.body);
//   artistReg.pictureupload = req.file.path;
//   console.log('This is the image you want to upload', req.file);
//   // Hashing Password
//   bcrypt.genSalt(10, (err, salt) => bcrypt.hash(artistReg.password, salt, (err, hash) => {
//     if (err) throw err;
//     // Set password to hashed.
//     artistReg.password = hash;
//     // Save Artist.
//     artistReg.save()
//       .then(artist => {
//         req.flash('success_msg', 'Artist has been registered successfully');
//         res.redirect('/clerkinfo/creativesregistration');
//       })
//       .catch((err) => console.log(err));
//   }));
// });

// Authentication trial.
// passport.use(ArtistsReg.createStrategy(
    
//     { usernameField: 'email' }, (email, password, done) => {
//         // Match User
//         ArtistsReg.findOne({ email: email })
//             .then((user) => {
//                 if (!user) {
//                     return done(null, false);
//                 }

//                 // Match password
//                 passport.compare(password, user.password, (err, isMatch) => {
//                     if (err) throw err;
//                     if (isMatch) {
//                         return done(null, user);                    
//                     } else {
//                         return done(null, false);
//                     }
//                 });
//             })
//             .catch((err) => console.log(err));
//     },
// ));
// passport.serializeUser(ArtistsReg.serializeUser((id, done) => {
//     done(null, user.id);
// }));  
// passport.deserializeUser(ArtistsReg.deserializeUser((id, done) => {
//     done(err, user);
// }));

// Second Trial Authentication
// passport.use(ArtistsReg.createStrategy(
//     { usernameField: 'email' }, (email, password, done) => {
//         ArtistsReg.findOne({ email: email }, function (err, user) {
//             if (err) { return done(err); }
//             if (!user) { return done(null, false); }
//             if (!user.verifyPassword(password)) { return done(null, false); }
//             return done(null, user);
//         });
//     },
// ));
// passport.serializeUser(ArtistsReg.serializeUser((id, done) => {
//     done(null, user.id);
// }));
// passport.deserializeUser(ArtistsReg.deserializeUser((id, done) => {
//     done(err, user);
// }));
