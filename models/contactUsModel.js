/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
const mongoose = require('mongoose');

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
module.exports = mongoose.model('Contactus', contactUsSchema);
