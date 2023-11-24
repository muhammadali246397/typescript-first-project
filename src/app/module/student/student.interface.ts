import { Schema, model, connect } from 'mongoose';

export type Gardiyan = {
    fatherName:string;
    fatherOcupation:string;
    fatherContactNo:string;
    mtoherName:string;
    motherOcupation:string;
    motherContactNumber:string;
}

export type Name = {
    firstName:string;
    midelName:string;
    lastName:string;
}

export type LocalGardiyan = {
    name:string;
    ocupation :string;
    contactNo:string;
    address:string;
}

export type studentInfo =  {
   id:string,
   name:Name;
   gendar:"Male" | "Female";
   email:string;
   avator:string;
   dateOfBarth:string;
   contactNo:string;
   emargencyContactNo:string;
   bloodGroup?:'A+' |'B+' |'O+'| 'AB+';
   pragentAddress:string;
   parmanentAddress:string;
   gardiyan:Gardiyan;
   localGardiyan:LocalGardiyan;
   profileImg?:string;
   isActive:'active' | 'inactive';
  }