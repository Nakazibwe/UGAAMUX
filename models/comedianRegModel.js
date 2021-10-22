/* eslint-disable no-multiple-empty-lines */
/* eslint-disable indent */
   /* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
const mongoose = require('mongoose');

const ComedianRegSchema = new mongoose.Schema({
    
    firstName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    stagename: {
        type: String,
        trim: true,
           
        
    },
    comedianID: {
        type: String,
        trim: true,
    },
    customeremail: {
        type: String,
        trim: true,
    },
    comedianphone: {
        type: String,
           
        
    },
    NationalNIN: {
        type: String,
        trim: true,
    },
    twitter: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
           
        
    },
    ComedianDOB: {
        type: String,
        trim: true,
    },
    Location: {
        type: String,
        trim: true,
    },
    Based: {
        type: String,
           
        
    },
    startedcomedy: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        trim: true,
    },
    uploadedpicture: {
        // type: Image,
           
        
    },
    
});      
module.exports = mongoose.model('ComedianReg', ComedianRegSchema);
