export interface BaseDocument  {
  _id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type SignupFormData = {
  name:string,
  role:string,
  email: string,
  password: string
}
export type LoginFormData = {
  email: string,
  password: string
}

export interface IUser extends BaseDocument {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  status: boolean;
}

//Leads Schema
export interface ILead extends BaseDocument {
  leadName: string;
  contactNumber: string;
  email: string;
  address?: string;
  status: string;
  // nextFollowUpDate: Date;
  // nextFollowUpTime: string;
  // leadSource: string;
  // conversionDate?: Date;
  // leadNotes?: string;
  // customerType?: string;
  // purchaseHistory?: string[];
  // medicalNeeds?: string[];
}