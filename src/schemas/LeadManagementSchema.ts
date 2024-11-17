import { z } from 'zod';

export const leadSchema = z.object({
  leadName: z.string().min(1, { message: "Lead name is required" }),
  contactNumber: z.string().min(10, { message: "Contact number must be at least 10 digits" }),
  email: z.string().email({ message: "Invalid email address" }),
  address: z.string().optional(),
  status: z.string().min(1, { message: "Status is required" }),
  // nextFollowUpDate: z.date({ required_error: "Next follow-up date is required" }),
  // nextFollowUpTime: z.string().min(1, { message: "Next follow-up time is required" }),
  // leadSource: z.string().min(1, { message: "Lead source is required" }),
  // conversionDate: z.date().optional(),
  // leadNotes: z.string().optional(),
  // customerType: z.string().optional(),
  // purchaseHistory: z.array(z.string()).optional(),
  // medicalNeeds: z.array(z.string()).optional(),
});

// Type inferred from the schema
export type ILeadFormData = z.infer<typeof leadSchema>;
