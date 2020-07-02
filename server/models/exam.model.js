const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const examSchema = new Schema({
    examnum: {type: String, required: true},
    questionnum: {type: String, required: true},
    questionbody: {type: String, required: true},
    answer: {type: String, required: true},
    status: {type: String, required: true}
}, {
    timestamps: true,
});

const Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;