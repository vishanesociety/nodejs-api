const express = require('express');
const router = express.Router();
const { 
    createStudent, 
    getAllStudents, 
    getStudent, 
    deleteStudent, 
    patchStudent
 } = require('../../controllers/student')


router.route('/')
    .post(createStudent)
    .get(getAllStudents)

router.route('/:rollNumber')
    .get(getStudent)
    .delete(deleteStudent)
    .patch(patchStudent)

module.exports = router;