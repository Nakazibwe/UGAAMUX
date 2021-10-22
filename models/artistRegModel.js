/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
const mongoose = require('mongoose');

const artistsRegSchema = new mongoose.Schema({
    
    firstName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    stageName: {
        type: String,
        trim: true,
         
    },
    artistID: {
        type: String,
        trim: true,
        
    },
    telephone: {
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
    ArtistDOB: {
        type: String,
        trim: true,
        
    },
    basedDistrict: {
        type: String,
        trim: true,
    },
    nationalIDNIN: {
        type: String,
        trim: true,
    },
    datestartedsing: {
        type: String,
        trim: true,
        unique: true,
         
    },
    Location: {
        type: String,
        trim: true,
        
    },
    numberofalbums: {
        type: Number,
        trim: true,
        
    },
    numberofsongs: {
        type: Number,
        trim: true,
        
    },
    genre: {
        type: String,
        trim: true,
        
    },
    gender: {
        type: String,
        trim: true,
        
    },
    pictureupload: {
        // type: Image, 
           
    },



    
});
module.exports = mongoose.model('ArtistsReg', artistsRegSchema);
