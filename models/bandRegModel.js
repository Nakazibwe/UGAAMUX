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
    },
    BandOwner: {
        type: String,
        trim: true,
    },
    BandHome: {
        type: String,
        trim: true,            
        
    },
    BandNumber: {
        type: Number,
        trim: true,
    },
    BandSlogan: {
        type: String,
        trim: true,
    },
    bandID: {
        type: String,
        trim: true,
                
        
    },
    numberofsongs: {
        type: Number,
        trim: true,
    },
    DateFormation: {
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
    },
    bandCrowns: {
        type: String,
        trim: true,
                
    
    },
    albums: {
        type: Number,
        trim: true,
    },
    genre: {
        // type: Image,
          
    },
    icon: {
        // type: Image,
        
    },
    Profilepicture: {
        // type: Image,
                   
    },
    ownership: {
        type: String,
        
    },
    bandsponsors: {
        type: String,
        trim: true,
    },
    
   
});      
module.exports = mongoose.model('BandReg', BandRegSchema);
