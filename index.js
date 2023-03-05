const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

app.use(express.json());

mongoose.connect(DB_URL);
mongoose.connection.on('connected',function(){
    console.log(`mongoose connected to ${DB_URL}`);
});
mongoose.connection.on('error', err => {
    logError(err);
  });

// try {
//     await mongoose.connect(DB_URL);
//     mongoose.connection.on('connected', function () {
//         console.log(`mongoose connected to ${DB_URL}`);
//     });

// } catch (error) {
//     console.log(error);
// }

app.listen(PORT, (err) => {
    if (!err) return console.log(`server starts at port ${PORT}`)
    return console.log(err);
})

