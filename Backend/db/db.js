const mongoose = require('mongoose');

//connecting mongoose to database
function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT
    ).then(() => {
        console.log('Connected to DB');
    }).catch(err => console.log(err));
}

module.exports = connectToDb;