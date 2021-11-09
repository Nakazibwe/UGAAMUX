/* eslint-disable no-multiple-empty-lines */
/* eslint-disable indent */
   /* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
const mongoose = require('mongoose');
// Schema for forgot password
const ForgotpasswdSchema = new mongoose.Schema({
    
    email: {
        type: String,
        trim: true,
        required: true,  
    },
});

// Exporting the  model. 
module.exports = mongoose.model('ForgotPassword', ForgotpasswdSchema);
