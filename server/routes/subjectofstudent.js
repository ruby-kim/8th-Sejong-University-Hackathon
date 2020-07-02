const router = require('express').Router();
let Student = require('../models/student.model');
let Subject = require('../models/subject.model');

router.route('/').get((req, res) => {
    Student.find()
        .then(student => res.json(student))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
    var fs = require('fs');
    fs.readFile('/home/id.txt', 'utf-8', function(err, data) {
        console.log(data);
    });
    const id = data;
    const coursearr = [];

    Student.findOne({'studentnum':id})
        .then(student => {
            if (!student) return res.statut(404).json({message:"post not found"});
            console.log(student.courses)
            coursearr = student.courses
            res.status(200).json({
                success:true,
                id:id,
                course:student.courses
            })
            
        })

    Subject.find({})
});


module.exports = router;