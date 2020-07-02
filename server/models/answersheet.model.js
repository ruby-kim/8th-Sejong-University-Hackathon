const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const answersheetSchema = new Schema({
    questionid: {type: String, required: true},
    answer: {type: String, required: true},
    studentnum: {type: String, required: true}
}, {
    timestamps: true,
});

const Answersheet = mongoose.model('Answersheet', answersheetSchema);

module.exports = Answersheet;