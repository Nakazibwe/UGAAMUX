/* eslint-disable no-multiple-empty-lines */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
const mongoose = require('mongoose');

const BandRegSchema = new mongoose.Schema({
    
    BandName: {
        type: String,
        trim: true,
        default: '',
    },
    BandOwner: {
        type: String,
        trim: true,
        default: '',
    },
    BandHome: {
        type: String,
        trim: true,
        default: '',
        
    },
    BandNumber: {
        type: Number,
        trim: true,
        default: 0,
    },
    BandSlogan: {
        type: String,
        trim: true,
        default: '',
    },
    bandID: {
        type: String,
        trim: true,
        default: '',
                   
    },
    numberofsongs: {
        type: Number,
        trim: true,
        default: 0,
    },
    DateFormation: {
        type: Date,
        trim: true,
        
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
    bandCrowns: {
        type: String,
        trim: true,
        default: '',
                
    },
    albums: {
        type: Number,
        trim: true,
        default: '',
    },
    genre: {
        type: String,
        trim: true,
        default: '',
          
    },
    icon: {
        data: Buffer,
        contentType: String,
        
    },
    Profilepicture: {
        data: Buffer,
        contentType: String,
                   
    },
    ownership: {
        type: String,
        default: '',
        
    },
    bandsponsors: {
        type: String,
        default: '',
        
    },
    
   
});       
module.exports = mongoose.model('BandReg', BandRegSchema);
