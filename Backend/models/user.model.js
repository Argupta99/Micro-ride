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

    email: {
        type: String,
        required: true,

    },

    password: {
        type: String,
        required: true,
        minlength: [5, 'password must be atleast 5 or more characters long'],
    },

    //for live tracking,sharing captain location to user
    socketID: {
       type: String,
    },

})