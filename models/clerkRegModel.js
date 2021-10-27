const mongoose = require('mongoose');

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
module.exports = mongoose.model('ClerkReg', ClerkRegSchema);
