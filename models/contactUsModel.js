/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
const mongoose = require('mongoose');

// Contactus Schema 
const contactUsSchema = new mongoose.Schema({
    
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
    message: {
        type: String,
        required: true,   
        
    },
});

// Exporting the model 
module.exports = mongoose.model('Contactus', contactUsSchema);
