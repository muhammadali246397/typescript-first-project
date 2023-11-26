import { Request, Response } from 'express';
import { studentServices } from './student.service';

const createStudents = async (req: Request, res: Response) => {
  try {
    const student = req.body;
    const result = await studentServices.createStudentIntoDB(student);
    res.status(200).json({
      success: true,
      message: 'data add database successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentIntoDB();

    res.status(200).json({
      success: true,
      message: 'data add database successfully',
      da: result,
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const getSpecificStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.getSpecificStudentIntoDB(studentId);
    res.status(200).json({
      success: true,
      message: 'data add database successfully',
      da: result,
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export const studantController = {
  createStudents,
  getAllStudents,
  getSpecificStudent,
};
