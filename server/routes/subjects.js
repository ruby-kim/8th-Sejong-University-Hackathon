const router = require('express').Router();
let Subject = require('../models/subject.model');

router.route('/').get((req, res) => {
    User.find()
        .then(subjects => res.json(subjects))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const subjectprimary = req.body.subjectprimary;
    const subjectnum = req.body.subjectnum;
    const classnum = req.body.classnum;
    const name = req.body.name;
    const testtime = req.body.testtime;

    const newSubject = new Subject({
        subjectprimary,
        subjectnum,
        classnum,
        name,
        testtime,
    });

    newSubject.save()
        .then(() => res.json('Subject added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update
router.route('/update/:id').post((req, res) => {
    Subject.findById(req.params.id)
      .then(subject => {
        subject.subjectprimary = req.body.subjectprimary;
        subject.subjectnum = req.body.subjectnum;
        subject.classnum = req.body.classnum;
        subject.name = req.body.name;
        subject.testtime = req.body.testtime;
  
        course.save()
          .then(() => res.json('Subject updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  // Delete
  router.route('/:id').delete((req, res) => {
    Student.findByIdAndDelete(req.params.id)
      .then(() => res.json('Subject deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;