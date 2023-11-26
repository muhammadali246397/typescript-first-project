import { Schema, model } from 'mongoose';
import {
  Gardiyan,
  LocalGardiyan,
  Name,
  studentInfo,
} from './student.interface';

const NameSchema = new Schema<Name>({
  firstName: {
    type: String,
    required: true,
  },
  midelName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const GardiyanSchema = new Schema<Gardiyan>({
  fatherName: { type: String, required: true },
  fatherOcupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  mtoherName: { type: String, required: true },
  motherOcupation: { type: String, required: true },
  motherContactNumber: { type: String, required: true },
});

const LocalGardiyanSchema = new Schema<LocalGardiyan>({
  name: {
    type: String,
  },
  ocupation: { type: String },
  contactNo: { type: String },
  address: { type: String },
});

const Studentschema = new Schema<studentInfo>({
  id: { type: String },
  name: NameSchema,
  gendar: ['Female', 'Male'],
  email: { type: String, required: true },
  avator: { type: String },
  contactNo: { type: String, required: true },
  dateOfBarth: { type: String },
  emargencyContactNo: { type: String },
  pragentAddress: { type: String, requied: true },
  parmanentAddress: { type: String, required: true },
  bloodGroup: ['A+', 'AB+', 'B+', 'O+'],
  gardiyan: GardiyanSchema,
  localGardiyan: LocalGardiyanSchema,
  isActive: ['active', 'inactive'],
});

export const student = model<studentInfo>('student', Studentschema);
