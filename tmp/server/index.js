// Import npm packages
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

require('dotenv').config();

mongoose.connect(process.env.ATLAS_URI || 'mongodb://localhost/<dbname>', { 
  useNewUrlParser: true, 
  useCreateIndex: true 
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


// Data parsing
app.use(cors());
app.use(express.json());


// HTTP request logger
const usersRouter = require('./routes/users');
const subjectsRouter = require('./routes/subjects');

app.use('/users', usersRouter);
app.use('/subjects', subjectsRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../build'));
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});