const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    subjectnum: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 1
    },
    classnum: {type: String, required: true},
    name: {type: String, required: true},
    testtime: {type: String, required: true},
    testpapernum: {type: String, required: true}
}, {
    timestamps: true,
});

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;