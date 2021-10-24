/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
const mongoose = require('mongoose');

const contactUsSchema = new mongoose.Schema({
    
    firstname: {
        type: String,
        trim: true,
        default: '',
    },
    lastname: {
        type: String,
        trim: true,
        default: '',
    },
    email: {
        type: String,
        trim: true,
        default: '',
         
    },
    message: {
        type: String,
        default: '', 
        
    },
});  
module.exports = mongoose.model('Contactus', contactUsSchema);
