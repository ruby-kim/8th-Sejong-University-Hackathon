const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: { type: String, required: true },
    description: {type: String, required: true},
    targetClass: {type: String, required: true},
    date: {type: String, required: true},
}, {
    timestamps: true,
});

const Course = mongoose.model('course', courseSchema);

module.exports = Course;