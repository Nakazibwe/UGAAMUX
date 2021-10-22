/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
const mongoose = require('mongoose');

const contactUsSchema = new mongoose.Schema({
    
    firstname: {
        type: String,
        trim: true,
    },
    lastname: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
         
    },
    message: {
        type: String,
        
    },
});
module.exports = mongoose.model('Contactus', contactUsSchema);
