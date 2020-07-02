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
    subjects: [{type: String, ref: 'Subject'}],
    scores: [{type: String, ref: 'Subject'}],
}, {
    timestamps: true,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;