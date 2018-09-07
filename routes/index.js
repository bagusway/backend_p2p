var express = require('express');
var router = express.Router();
const classroomController	 = require('../controllers').classroom;
const studentController		 = require('../controllers').student;
const lecturerController	 = require('../controllers').lecturer;
const courseController		 = require('../controllers').course;
const lenderController		 = require('../controllers').lender;
const borrowerController	 = require('../controllers').borrower;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// lender
router.post('/api/lender', lenderController.add);

// borrower
router.post('/api/borrower/addBorrower',borrowerController.addBorrower);
// borrow


// CLASSROOM
router.get('/api/classroom', classroomController.list);
router.get('/api/classroom/:id', classroomController.getById);
router.post('/api/classroom', classroomController.add);
router.put('/api/classroom/:id', classroomController.update);
router.delete('/api/classroom/:id', classroomController.delete);
router.post('/api/classroom/add_with_students', classroomController.addWithStudents);

// STUDENT
router.get('/api/student', studentController.list);
router.get('/api/student/:id', studentController.getById);
router.post('/api/student', studentController.add);
router.put('/api/student/:id', studentController.update);
router.delete('/api/student/:id', studentController.delete);
router.post('/api/student/add_course', studentController.addCourse);

// lecturer
router.get('/api/lecturer', lecturerController.list);
router.get('/api/lecturer/:id', lecturerController.getById);
router.post('/api/lecturer', lecturerController.add);
router.put('/api/lecturer/:id', lecturerController.update);
router.delete('/api/lecturer/:id', lecturerController.delete);
router.post('/api/lecturer/add_with_course', lecturerController.addWithCourse);

// course
router.get('/api/course', courseController.list);
router.get('/api/course/:id', courseController.getById);
router.post('/api/course', courseController.add);
router.put('/api/course/:id', courseController.update);
router.delete('/api/course/:id', courseController.delete);

module.exports = router;