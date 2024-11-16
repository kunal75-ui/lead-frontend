import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useDeleteLead, useGetLead } from '@/services/query/lead.management.query';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuthentication } from '@/hooks/useAuthentication';
import { ILead } from '@/types';

const DeleteLeadPage: React.FC = () => {
    const { leadId } = useParams();
    // const [lead, setLead] = useState<ILead | null>(null);
    // Get the lead ID from the route params
    const navigate = useNavigate();

    const { principal } = useAuthentication();

    // Fetch lead details
    const { mutateAsync: deleteLead } = useDeleteLead();
    // const { data } = useGetLead(leadId!)
    // setLead(data)

    const isAdmin = principal?.role === 'admin'

    console.log({ isAdmin });
console.log('delete',leadId);

    // Handle lead deletion
    const handleDelete = async () => {

        if (!isAdmin) {
            toast.error('You do not have permission to delete leads');
            return;
        }
        try {
            if (leadId) {

                await deleteLead(leadId!);
                toast.success('Lead deleted successfully');
                navigate('/dashboard'); // Redirect to the dashboard after deletion
            }
        } catch (error) {
            toast.error('Error deleting the lead');
        }
    };

    // Handle cancel action
    const handleCancel = () => {
        navigate(-1); // Go back to the previous page
    };



    return (
        <Card>
            <CardHeader>
                <CardTitle>Delete Lead</CardTitle>
                <CardDescription>
                    Are you sure you want to delete the lead <strong>user</strong>?
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col space-y-4">
                    <div>
                        {/* <p><strong>Lead Name:</strong> {data?.lead.leadName}</p>
            <p><strong>Contact Number:</strong> {data?.lead?.contactNumber}</p>
            <p><strong>Email:</strong> {data?.lead?.email}</p> */}
                    </div>
                    <div className="flex space-x-4">
                        <Button variant="destructive" onClick={handleDelete}>
                            Confirm Delete
                        </Button>
                        <Button variant="secondary" onClick={handleCancel}>
                            Cancel
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default DeleteLeadPage;
