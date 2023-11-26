import express from 'express';
import { studantController } from './student.controller';

const router = express.Router();

router.post('/createStudent', studantController.createStudents);
router.get('/', studantController.getAllStudents);
router.get('/:studentId', studantController.getSpecificStudent);

export const studentRoute = router;
