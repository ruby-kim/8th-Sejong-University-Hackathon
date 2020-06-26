const router = require('express').Router();
let Course = require('../models/course.model');

router.route('/').get((req, res) => {
  Course.find()
    .then(courses => res.json(courses))
    .catch(err => res.status(400).json('Error: ' + err));
});




// Create
router.route('/add').post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const targetClass = req.body.targetClass;
  const date = req.body.date;

  const newCourse = new Course({
    name,
    description,
    targetClass,
    date,
  });

  newCourse.save()
  .then(() => res.json('Course added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

// Read
router.route('/:id').get((req, res) => {
  Course.findById(req.params.id)
    .then(course => res.json(course))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Update
router.route('/update/:id').post((req, res) => {
  Course.findById(req.params.id)
    .then(course => {
      course.name = req.body.name;
      course.description = req.body.description;
      course.targetClass = Number(req.body.targetClass);
      course.date = req.body.date;

      course.save()
        .then(() => res.json('Course updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// Delete
router.route('/:id').delete((req, res) => {
  Course.findByIdAndDelete(req.params.id)
    .then(() => res.json('Course deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;