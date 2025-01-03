const mongoose = require('mongoose');

//creating schema for the user
//fullname is an object

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must be atleast 3 characters long'],
        },       


        lastname: {
            type: String,
            required: true,
            minlength: [3, 'Last name must be atleast 3 characters long'],

        }
    },

    
})