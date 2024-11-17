import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema, ILeadFormData } from "@/schemas/LeadManagementSchema";
import { useAddLead, useUpdateLead } from "@/services/api/lead.api";
import { ILead } from "@/types";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "../ui/form";
import { Input } from "../ui/input";
import { CircleBackslashIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

type Props = {
    initialData?: ILead;
    isEditing?: boolean;
    onClose?: () => void;
};

const LeadForm: React.FC<Props> = ({ initialData, isEditing = false, onClose }) => {
    const navigate = useNavigate()
    const form = useForm<ILeadFormData>({
        resolver: zodResolver(leadSchema),
        defaultValues: initialData
    });

    const addLeadMutation = useAddLead();
    const updateLeadMutation = useUpdateLead();

    console.log('id', initialData?._id);
    const onSubmit: SubmitHandler<ILeadFormData> = (data) => {
        console.log('Submitting form with data:', data);
        if (isEditing && initialData?._id) {
            updateLeadMutation.mutate({ id: initialData._id, data }, { onSuccess: onClose });
            setTimeout(() => {

                navigate('/lead-management')
            }, 3000)
        } else {
            addLeadMutation.mutate(data, { onSuccess: onClose });

            setTimeout(() => {

                navigate('/lead-management')
            }, 3000)

        }
    };

    const handleCancel = () => {
        form.reset({ ...initialData })
        navigate(-1); // Go back to the previous page
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>{`${isEditing == true ? 'Edit' : 'Add New'} Lead `}</CardTitle>
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
                        {/* <FormField
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
                /> */}
                        {/* <FormField
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
                /> */}
                        <div>

                            <Button
                                variant="destructive"
                                className="gap-2"
                                type="reset"
                                onClick={() => handleCancel}>
                                <CircleBackslashIcon />
                                Cancel
                            </Button>
                            <Button type="submit" className="mt-4">Submit</Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>

        // <form onSubmit={handleSubmit(onSubmit)} className="lead-form">
        //   <div>
        //     <label>Name</label>
        //     <input type="text" {...register("name")} />
        //     {errors.name && <p>{errors.name.message}</p>}
        //   </div>
        //   <div>
        //     <label>Email</label>
        //     <input type="email" {...register("email")} />
        //     {errors.email && <p>{errors.email.message}</p>}
        //   </div>
        //   <div>
        //     <label>Contact Number</label>
        //     <input type="text" {...register("contactNumber")} />
        //     {errors.contactNumber && <p>{errors.contactNumber.message}</p>}
        //   </div>
        //   <button type="submit" disabled={addLeadMutation.isLoading || updateLeadMutation.isLoading}>
        //     {isEditing ? "Update Lead" : "Add Lead"}
        //   </button>
        // </form>
    );
};

export default LeadForm;
