const router = require('express').Router();
let Student = require('../models/student.model');

router.route('/').get((req, res) => {
    Student.find()
        .then(students => res.json(students))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const studentnum = req.body.studentnum;
    const name = req.body.name;
    const phonenum = req.body.phonenum;
    const status = req.body.status;
    const password = req.body.password;
    const courses = req.body.courses;
    const scores = req.body.scores;

    const newStudent = new Student({
        studentnum,
        name,
        phonenum,
        status,
        password,
        courses,
        scores,
    });

    newStudent.save()
        .then(() => res.json('Student added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update
router.route('/update/:id').post((req, res) => {
    Student.findById(req.params.id)
      .then(student => {
        student.studentnum = req.body.studentnum;
        student.name = req.body.name;
        student.phonenum = req.body.phonenum;
        student.status = req.body.status;
        student.password = req.body.password;
        student.courses = req.body.courses;
        student.scores = req.body.scores;

        course.save()
          .then(() => res.json('Student updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  // Delete
  router.route('/:id').delete((req, res) => {
    Student.findByIdAndDelete(req.params.id)
      .then(() => res.json('Student deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;