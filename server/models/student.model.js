const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    studentnum: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 1
    },
    name: {type: String, required: true},
    phonenum: {type: String, required: true},
    status: {type: String, required: true},
    password: {type: String, required: true},
    courses: [{type: String}],
    scores: [{type: String}]
}, {
    timestamps: true,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;