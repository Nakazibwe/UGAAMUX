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