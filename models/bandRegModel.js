/* eslint-disable no-multiple-empty-lines */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
const mongoose = require('mongoose');

const passportmongoose = require('passport-local-mongoose');

const BandRegSchema = new mongoose.Schema({
    
    BandName: {
        type: String,
        trim: true,
        required: true,
    },
    BandOwner: {
        type: String,
        trim: true,
        required: true,
    },
    BandHome: {
        type: String, 
        trim: true,
        required: true,
        
    },
    BandNumber: {
        type: Number,
        trim: true,
        default: 0,
        required: true,
    },
    BandSlogan: {
        type: String,
        trim: true,
        required: true,
    },
    bandID: {
        type: String,
        trim: true,
        required: true,
                   
    },
    numberofsongs: {
        type: Number,
        trim: true,
        default: 0,
        required: true,
    },
    DateFormation: {
        type: Date,
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
        default: '',
        required: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },
    bandCrowns: {
        type: String,
        trim: true,
        
                
    },
    albums: {
        type: Number,
        trim: true,
        required: true,
    },
    genre: {
        type: String,
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
    icon: {   
        type: String,  
    
        
        
    },
    Profilepicture: {
        type: String,
                   
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

BandRegSchema.plugin(passportmongoose, { 
    usernameField: 'email', 
    
});

module.exports = mongoose.model('BandReg', BandRegSchema);
