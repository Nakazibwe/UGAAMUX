/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
const mongoose = require('mongoose');
const passportmongoose = require('passport-local-mongoose');

// The artist registration schema 
const artistsRegSchema = new mongoose.Schema({
    
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
    stageName: {
        type: String,
        trim: true,
        required: true, 
         
    },
    artistID: {
        type: String,
        trim: true,
        required: true,
        
    },
    telephone: {
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
    ArtistDOB: {
        type: Date,
        trim: true,
        required: true,
        
        
    },
    basedDistrict: {
        type: String,
        trim: true,
        required: true,
    },
    nationalIDNIN: {
        type: String,
        trim: true,
        required: true,
    },
    datestartedsing: {
        type: Date,
        trim: true,
        required: true,
         
    },
    Location: {
        type: String,
        trim: true,
        required: true,
        
    },
    numberofalbums: {
        type: Number,
        trim: true,
        default: 0,
        required: true,
        
    },
    numberofsongs: {
        type: Number,
        trim: true,
        default: 0,
        required: true,
        
    },

    genre: { 
        type: String,
        trim: true,
        required: true,
        
    },
    bio: {
        type: String,
        required: true,  

    },
    gender: {
        type: String,
        trim: true,
        required: true, 
        
    },
    pictureupload: {
        type: String,
    },
    
     
});

// Passport local mongoose plugin. 
artistsRegSchema.plugin(passportmongoose, {
    usernameField: 'email',
    
});

// Exporting the model.
module.exports = mongoose.model('ArtistsReg', artistsRegSchema);     
