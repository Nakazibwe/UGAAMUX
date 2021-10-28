const mongoose = require('mongoose');

const passportmongoose = require('passport-local-mongoose');

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
  password: {
    type: String,
    trim: true,
    required: true,
  },
  role: {
    type: String,
    trim: true,
    required: true,
  },

});
ClerkRegSchema.plugin(passportmongoose, {
  usernameField: 'email',

});

module.exports = mongoose.model('ClerkReg', ClerkRegSchema);
