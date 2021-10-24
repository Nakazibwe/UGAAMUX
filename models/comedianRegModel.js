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
        default: '',
    },
    lastName: {
        type: String,
        trim: true,
        default: '',
    },
    stagename: {
        type: String,
        trim: true,
        default: '',
               
    },
    comedianID: {
        type: String,
        trim: true,
        default: '',
    },
    comedianphone: {
        type: String,
        trim: true,
        default: '',
              
    },
    NationalNIN: {
        type: String,
        trim: true,
        default: '',
    },
    twitter: {
        type: String,
        trim: true,
        default: '',
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        default: '',
               
    },
    ComedianDOB: {
        type: Date,
        trim: true,
    },
    Location: {
        type: String,
        trim: true,
        default: '',
    },
    Based: {
        type: String,
        trim: true,
        default: '',
             
    },
    startedcomedy: {
        type: Date,
        trim: true,
    },
    gender: {
        type: String,
        trim: true,
        default: '',
    },
    uploadedpicture: {
        data: Buffer,
        contentType: String,
              
    },  
    
});      
module.exports = mongoose.model('ComedianReg', ComedianRegSchema);
