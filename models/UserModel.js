/* eslint-disable no-unused-vars */

const mongoose = require('mongoose');
const passportmongoose = require('passport-local-mongoose');

// User Schema
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    required: true,
    trim: true,
  },
});

// passport local mongoose plug-in.
UserSchema.plugin(passportmongoose, {
  usernameField: 'email',
});

// Exporting the model.
module.exports = mongoose.model('User', UserSchema);
