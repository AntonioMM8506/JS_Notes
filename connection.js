const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);

const objectbd = mongoose.connection;

objectbd.on('connected', () => { console.log("Correct MongoDB Connection")});
objectbd.on('error', () => { console.log("Wrong MongoDB Connection")});

module.exports = mongoose;