/* eslint-disable no-multiple-empty-lines */
/* eslint-disable indent */
   /* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
const mongoose = require('mongoose');

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
module.exports = mongoose.model('RegMessage', RegMessageSchema);
