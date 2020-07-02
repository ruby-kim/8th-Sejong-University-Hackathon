const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    subjectprimary: {type: String, required: true, unique: true},
    subjectnum: {type: String, required: true},
    classnum: {type: String, required: true},
    name: {type: String, required: true},
    testtime: {type: String, required: true}
}, {
    timestamps: true,
});

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;