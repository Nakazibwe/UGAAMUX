/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
const mongoose = require('mongoose');

const artistsRegSchema = new mongoose.Schema({
    
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
    stageName: {
        type: String,
        trim: true,
        default: '',
         
    },
    artistID: {
        type: String,
        trim: true,
        default: '',
        
    },
    telephone: {
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
    ArtistDOB: {
        type: Date,
        trim: true,
        
        
    },
    basedDistrict: {
        type: String,
        trim: true,
        default: '',
    },
    nationalIDNIN: {
        type: String,
        trim: true,
        default: '',
    },
    datestartedsing: {
        type: Date,
        trim: true,
         
    },
    Location: {
        type: String,
        trim: true,
        default: '',
        
    },
    numberofalbums: {
        type: Number,
        trim: true,
        default: 0,
        
    },
    numberofsongs: {
        type: Number,
        trim: true,
        default: 0,
        
    },
    genre: {
        type: String,
        trim: true,
        default: '',
        
    },
    gender: {
        type: String,
        trim: true,
        default: '',
        
    },
    pictureupload: {
        data: Buffer,
        contentType: String,
           
    },



    
});
module.exports = mongoose.model('ArtistsReg', artistsRegSchema);
