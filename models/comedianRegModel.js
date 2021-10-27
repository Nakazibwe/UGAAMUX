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
        required: true,
    },
    lastName: {
        type: String,
        trim: true,
        required: true,
    },
    stagename: {  
        type: String,
        trim: true,
        required: true,        
    },
    comedianID: {
        type: String,
        trim: true,
        required: true,
    },
    comedianphone: {
        type: String,
        trim: true,
        required: true,         
    },
    NationalNIN: {
        type: String,
        trim: true,
        required: true,
    },
    twitter: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
               
    },
    ComedianDOB: {
        type: Date,
        trim: true,
        required: true,
    },
    Location: {   
        type: String,
        trim: true,
        required: true,
    },
    Based: {
        type: String,
        trim: true,
        required: true,
             
    },
    startedcomedy: {
        type: Date,
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
    gender: {
        type: String,
        trim: true,
        required: true,
    },
    uploadedpicture: {
        
        data: Buffer,
        contentType: String,
              
    },  
    
});      
module.exports = mongoose.model('ComedianReg', ComedianRegSchema);
