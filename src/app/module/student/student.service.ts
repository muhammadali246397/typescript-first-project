import { studentInfo } from './student.interface';
import { student } from './student.model.schema';

const createStudentIntoDB = async (studants: studentInfo) => {
  const result = await student.create(studants);
  return result;
};

const getAllStudentIntoDB = async () => {
  const result = await student.find();
  return result;
};

const getSpecificStudentIntoDB = async (id:string) => {
  const result = await student.findOne({ id });
  return result;
};
export const studentServices = {
  createStudentIntoDB,
  getAllStudentIntoDB,
  getSpecificStudentIntoDB,
};
