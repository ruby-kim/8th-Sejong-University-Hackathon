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
const coursesRouter = require('./routes/courses');
const usersRouter = require('./routes/users');
const studentsRouter = require('./routes/students');
const subjectsRouter = require('./routes/subjects');
const examRouter = require('./routes/exams');
const answersheetRouter = require('./routes/answersheets');
const loginRouter = require('./routes/login');

app.use('/courses', coursesRouter);
app.use('/users', usersRouter);
app.use('/students', studentsRouter);
app.use('/subjects', subjectsRouter);
app.use('/exams', examRouter);
app.use('/answersheets', answersheetRouter);
app.use('/login', loginRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../build'));
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});