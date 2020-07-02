const router = require('express').Router();
let Student = require('../models/student.model');

router.route('/').get((req, res) => {
    Student.find()
        .then(student => res.json(student))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
    const id = req.body.id;
    const password = req.body.password;

    Student.findOne({'studentnum':id, 'password':password})
        .then(login => {
            if (!login) return res.statut(404).json({message:"post not found"});
            console.log(login.status)
            res.status(200).json({
                success:true,
                id:id,
                status:login.status
            })
            var fs = require('fs');
            fs.writeFile('id.txt', id, function() {
                        fs.readFile('/home/id.txt', 'utf-8', function(err, data) {
                            console.log(data);
                        });
                    });
        })
});


module.exports = router;