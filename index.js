const express = require("express");

const port = 8000;
const app = express();
const mongoose = require("mongoose");

var cors = require('cors');
app.use(cors());
app.use(express.json());
const userRoute = require('./routes/user_routes');
const categoryRoute = require('./routes/home/catgories_routes');
app.use('/api/users/',userRoute);
app.use('/api/home/categories',categoryRoute);
app.listen(port);
 mongoose.connect("mongodb+srv://mihoyahou:YzFN4ccF8u7HkKHi@cluster0.jjdh5dp.mongodb.net/");
/*
      1) Install Courier SDK: npm install @trycourier/courier
      2) Make sure you allow ES module imports: Add "type": "module" to package.json file
      
      ; */
