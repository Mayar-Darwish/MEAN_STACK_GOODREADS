const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRouter=require('./routes/admin/login');
require('dotenv').config();
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
app.use(express.json());


mongoose.connect(DB_URL);
mongoose.connection.on('connected',function(){
    console.log(`mongoose connected to ${DB_URL}`);
});
app.use('/admin',userRouter);


mongoose.connection.on('error', err => {
     console.log(err);
  });



app.listen(PORT, (err) => {
    if (!err) return console.log(`server starts at port ${PORT}`)
    return console.log(err);
})

