const router = require('express').Router();
let Exam = require('../models/exam.model');

router.route('/').get((req, res) => {
    Exam.find()
        .then(exams => res.json(exams))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const examnum = req.body.examnum;
    const questionnum = req.body.questionnum;
    const questionbody = req.body.questionbody;
    const answer = req.body.answer;
    const status = req.body.status;

    const newExam = new Exam({
        examnum,
        questionnum,
        questionbody,
        answer,
        status,
    });

    newExam.save()
        .then(() => res.json('Exam added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update
router.route('/update/:id').post((req, res) => {
    Exam.findById(req.params.id)
      .then(exam => {
        exam.examnum = req.body.examnum;
        exam.questionnum = req.body.questionnum;
        exam.questionbody = req.body.questionbody;
        exam.answer = req.body.answer;
        exam.status = req.body.status;

        exam.save()
          .then(() => res.json('Exam updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  // Delete
  router.route('/:id').delete((req, res) => {
    Exam.findByIdAndDelete(req.params.id)
      .then(() => res.json('Exam deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;