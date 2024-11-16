// // import React from 'react';

// // // import RoleType from '@/components/dropdowns/RoleType';
// // import { Button } from '@/components/ui/button';
// // import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// // // import { Checkbox } from '@/components/ui/checkbox';
// // import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
// // import { Input } from '@/components/ui/input';
// // import { useAddLeadManagement, useLeads } from '@/services/query/lead.management.query';


// // const LeadManagementForm = () => {
// //     // const { form, submitForm, isAclError, isPending, permissionData } = useUserRoleForm({ type });
// //     const {} = useAddLeadManagement()
// //     return (
// //         <Form {...form}>
// //             <form>
// //                 <Card className="drop-shadow-lg">
// //                     <CardHeader>
// //                         <CardTitle>
// //                             <CardTitle>{`Create User Role`}</CardTitle>
// //                             <CardDescription className="py-2">
// //                                 <span className="p-regular-14">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
// //                             </CardDescription>
// //                             {/* <Separator /> */}
// //                         </CardTitle>
// //                     </CardHeader>
// //                     <CardContent className="py-4">
// //                         <div className="flex flex-col gap-5">
// //                             <div className="flex flex-col gap-5 md:flex-row">
// //                                 <FormField
// //                                     control={form.control}
// //                                     name="name"
// //                                     render={({ field }) => (
// //                                         <FormItem className="w-full">
// //                                             <FormControl>
// //                                                 <Input placeholder="Role Name" {...field} className="input-field" />
// //                                             </FormControl>
// //                                             <FormMessage />
// //                                         </FormItem>
// //                                     )}
// //                                 />
// //                                 <FormField
// //                                     control={form.control}
// //                                     name="roleType"
// //                                     render={({ field }) => (
// //                                         <FormItem className="w-full">
// //                                             <FormControl>
// //                                                 {/* <RoleType onChangeHandler={field.onChange} value={field.value} /> */}
// //                                             </FormControl>
// //                                             <FormMessage />
// //                                         </FormItem>
// //                                     )}
// //                                 />
// //                             </div>
// //                             <Separator />
// //                             <div>{!isAclError && permissionData && renderPermissions(form, permissionData.data)}</div>
// //                             <Separator />
// //                         </div>
// //                     </CardContent>
// //                     <CardFooter>
// //                         <div className="gap-4 ml-auto flex-between">
// //                             <Button
// //                                 variant="destructive"
// //                                 className="gap-2"
// //                                 type="reset"
// //                                 onClick={() => {
// //                                     form.reset({
// //                                         name: undefined,
// //                                         roleType: undefined,
// //                                     });
// //                                 }}>
// //                                 {/* <CircleBackslashIcon /> */}
// //                                 Cancel
// //                             </Button>
// //                             <Button className="gap-2" disabled={isPending || !form.formState.isDirty} type="submit">
// //                                 {/* <PlusCircledIcon /> */}
// //                                 Add
// //                             </Button>
// //                         </div>
// //                     </CardFooter>
// //                 </Card>
// //             </form>
// //         </Form>
// //     );
// // };

// // // // const renderPermissions = (form: UseFormReturn, permissionData: IPermission[]) => {
// // // //     return (
// // // //         <div className="flex flex-col gap-4">
// // // //             <h1 className="p-semibold-16">User Role Permissions</h1>
// // // //             <Separator />
// // // //             <FormField
// // // //                 control={form.control}
// // // //                 name="permissions"
// // // //                 render={() => {
// // // //                     return permissionData.map((p) => {
// // // //                         return (
// // // //                             <div className="flex flex-col gap-4 p-4">
// // // //                                 <FormLabel className="p-semibold-14">{p.displayName}</FormLabel>
// // // //                                 <Separator />
// // // //                                 <div className="grid gap-6 grid-cols-5 px-4 py-2">
// // // //                                     {p.access.map((a) => (
// // // //                                         <FormField
// // // //                                             key={a.value}
// // // //                                             control={form.control}
// // // //                                             name="permissions"
// // // //                                             render={({ field }) => {
// // // //                                                 return (
// // // //                                                     <FormItem key={a.value} className="flex flex-row items-start space-x-3 space-y-0">
// // // //                                                         <FormControl>
// // // //                                                             <Checkbox
// // // //                                                                 className="rounded"
// // // //                                                                 checked={field.value?.includes(a.value)}
// // // //                                                                 onCheckedChange={(checked) => {
// // // //                                                                     return checked
// // // //                                                                         ? field.onChange([...field.value, a.value])
// // // //                                                                         : field.onChange(field.value?.filter((value: string) => value !== a.value));
// // // //                                                                 }}
// // // //                                                             />
// // // //                                                         </FormControl>
// // // //                                                         <FormLabel className="font-normal">{a.key}</FormLabel>
// // // //                                                     </FormItem>
// // // //                                                 );
// // // //                                             }}
// // // //                                         />
// // // //                                     ))}
// // // //                                 </div>
// // // //                             </div>
// // // //                         );
// // // //                     });
// // // //                 }}
// // // //             />
// // // //         </div>
// // // //     );
// // // // };

// // // export default LeadManagementForm;


// import React from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';
// import { useAddLeadManagement, useUpdateLeadManagement, useDeleteLeadManagement } from '@/services/query/lead.management.query';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { leadSchema } from '../schemas/LeadManagementSchema';

// // Define the lead form props
// interface LeadFormProps {
//   leadId?: string; // Optional for editing an existing lead
//   onSuccess?: () => void;
// }

// // LeadManagementForm component
// const LeadManagementForm: React.FC<LeadFormProps> = ({ leadId, onSuccess }) => {
//   const { mutate: addLead } = useAddLeadManagement();
//   const { mutate: updateLead } = useUpdateLeadManagement();
//   const { mutate: deleteLead } = useDeleteLeadManagement();

//   // Initialize form with Zod validation
//   const form = useForm({
//     resolver: zodResolver(leadSchema),
//     defaultValues: {
//       leadName: '',
//       contactNumber: '',
//       email: '',
//       address: '',
//       status: '',
//       nextFollowUpDate: '',
//       nextFollowUpTime: '',
//       leadSource: '',
//       conversionDate: '',
//       leadNotes: '',
//       customerType: '',
//       purchaseHistory: [],
//       medicalNeeds: [],
//     },
//   });

//   const onSubmit = (data: any) => {
//     if (leadId) {
//       // Update lead if leadId is present
//       updateLead({ id: leadId, data }, { onSuccess });
//     } else {
//       // Add new lead
//       addLead(data, { onSuccess });
//     }
//   };

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)}>
//         <Card className="drop-shadow-lg">
//           <CardHeader>
//             <CardTitle>{leadId ? 'Edit Lead' : 'Add New Lead'}</CardTitle>
//             <CardDescription className="py-2">
//               {leadId ? 'Edit the details of the lead.' : 'Fill in the details to add a new lead.'}
//             </CardDescription>
//           </CardHeader>
//           <CardContent className="py-4">
//             <div className="flex flex-col gap-5">
//               <div className="flex flex-col gap-5 md:flex-row">
//                 <FormField
//                   control={form.control}
//                   name="leadName"
//                   render={({ field }) => (
//                     <FormItem className="w-full">
//                       <FormLabel>Lead Name</FormLabel>
//                       <FormControl>
//                         <Input placeholder="Lead Name" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="contactNumber"
//                   render={({ field }) => (
//                     <FormItem className="w-full">
//                       <FormLabel>Contact Number</FormLabel>
//                       <FormControl>
//                         <Input placeholder="Contact Number" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="email"
//                   render={({ field }) => (
//                     <FormItem className="w-full">
//                       <FormLabel>Email</FormLabel>
//                       <FormControl>
//                         <Input placeholder="Email" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>

//               {/* Additional fields for lead details */}
//               <div className="flex flex-col gap-5 md:flex-row">
//                 <FormField
//                   control={form.control}
//                   name="address"
//                   render={({ field }) => (
//                     <FormItem className="w-full">
//                       <FormLabel>Address</FormLabel>
//                       <FormControl>
//                         <Input placeholder="Address" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="status"
//                   render={({ field }) => (
//                     <FormItem className="w-full">
//                       <FormLabel>Status</FormLabel>
//                       <FormControl>
//                         <Input placeholder="Status" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>
//             </div>
//           </CardContent>
//           <CardFooter>
//             <div className="gap-4 ml-auto flex-between">
//               <Button
//                 variant="destructive"
//                 onClick={() => {
//                   if (leadId) {
//                     deleteLead(leadId, { onSuccess });
//                   } else {
//                     form.reset();
//                   }
//                 }}
//               >
//                 {leadId ? 'Delete' : 'Cancel'}
//               </Button>
//               <Button
//                 type="submit"
//                 disabled={!form.formState.isDirty}
//               >
//                 {leadId ? 'Update Lead' : 'Add Lead'}
//               </Button>
//             </div>
//           </CardFooter>
//         </Card>
//       </form>
//     </Form>
//   );
// };

// export default LeadManagementForm;

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useAddLead, useGetLead, useUpdateLead } from '@/services/query/lead.management.query';
import { ILead } from '@/types';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ILeadFormData } from '../schemas/LeadManagementSchema';


const LeadForm = ({ leadId, initialData }: { leadId?: string, initialData?: ILeadFormData }) => {
// const LeadForm = () => {
  const navigate = useNavigate();
  // const { id: leadId } = useParams();
  // const { data: lead } = useGetLead(leadId!);
  const { mutateAsync: addLead } = useAddLead();
  const { mutateAsync: updateLead } = useUpdateLead();
  const form = useForm<ILeadFormData>({
    defaultValues:{
      leadName: '',
      address:'',
      contactNumber:''
    }
  });
  console.log("update", leadId);

  const onSubmit = async (data: ILead) => {
    if (leadId) {
      await updateLead({
        id: leadId,
        data: data
      });
      toast.success('Lead updated successfully');
      navigate('/dashboard');
    }
    // } 
    // else {
    //   await addLead(data);
    //   toast.success('Lead added successfully');
    // }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{leadId ? 'Edit Lead' : 'Add New Lead'}</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full gap-2  mx-auto mb-0 mt-8  space-y-2">
            <FormField
              control={form.control}
              name="leadName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lead Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Lead Name" className="input-field" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Contact Number" className="input-field" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" className="input-field" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Address" className="input-field" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <FormControl>
                    <Input placeholder="Status" className="input-field" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nextFollowUpDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Next Follow-Up Date</FormLabel>
                  <FormControl>
                    <Input type="date" className="input-field" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nextFollowUpTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Next Follow-Up Time</FormLabel>
                  <FormControl>
                    <Input placeholder="Next Follow-Up Time" className="input-field" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="leadSource"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lead Source</FormLabel>
                  <FormControl>
                    <Input placeholder="Lead Source" className="input-field" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="conversionDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Conversion Date</FormLabel>
                  <FormControl>
                    <Input type="date" className="input-field" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="leadNotes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lead Notes</FormLabel>
                  <FormControl>
                    <Input placeholder="Lead Notes" className="input-field" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="customerType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Customer Type</FormLabel>
                  <FormControl>
                    <Input placeholder="Customer Type" className="input-field" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="purchaseHistory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Purchase History</FormLabel>
                  <FormControl>
                    <Input placeholder="Purchase History" className="input-field" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="medicalNeeds"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Medical Needs</FormLabel>
                  <FormControl>
                    <Input placeholder="Medical Needs" className="input-field" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-4">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LeadForm;
