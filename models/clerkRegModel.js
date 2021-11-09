const mongoose = require('mongoose');

const passportmongoose = require('passport-local-mongoose');

// Schema for registering clerk.
const ClerkRegSchema = new mongoose.Schema({

  firstname: {
    type: String,
    trim: true,
    required: true,
  },
  lastname: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },

});

// Passport local mongoose plug-in.
ClerkRegSchema.plugin(passportmongoose, {
  usernameField: 'email',

});

// Exporting the model.
module.exports = mongoose.model('ClerkReg', ClerkRegSchema);
