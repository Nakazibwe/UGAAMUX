/* eslint-disable no-multiple-empty-lines */
/* eslint-disable indent */
   /* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
const mongoose = require('mongoose');

// Schema for the register message 
const RegMessageSchema = new mongoose.Schema({
    
    customername: {
        type: String,
        trim: true,
        required: true,
    },
    customeremail: {
        type: String,
        trim: true,
        required: true,
    },
    message: {
        type: String,
        required: true,    
                
        
    }, 
});

// Exporting the model.
module.exports = mongoose.model('RegMessage', RegMessageSchema);
