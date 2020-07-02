const router = require('express').Router();
let Answersheet = require('../models/answersheet.model');

router.route('/').get((req, res) => {
    Answersheet.find()
        .then(answersheet => res.json(answersheet))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const questionid = req.body.questionid;
    const answer = req.body.answer;
    const studentnum = req.body.studentnum;

    const newAnswersheet = new Answersheet({
        questionid,
        answer,
        studentnum,
    });

    newAnswersheet.save()
        .then(() => res.json('Answersheet added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update
router.route('/update/:id').post((req, res) => {
    Answersheet.findById(req.params.id)
      .then(answersheet => {
        answersheet.questionid = req.body.questionid;
        answersheet.answer = req.body.answer;
        answersheet.studentnum = req.body.studentnum;

        answersheet.save()
          .then(() => res.json('Answersheet updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  // Delete
  router.route('/:id').delete((req, res) => {
    Exam.findByIdAndDelete(req.params.id)
      .then(() => res.json('Answersheet deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;