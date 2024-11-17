import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuthentication } from '@/hooks/useAuthentication';
import { useGetLead, useDeleteLead } from '@/services/api/lead.api';

const DeleteLeadPage: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate()

    const { principal } = useAuthentication();
    const { data: leadData, isLoading } = useGetLead(id!)

    if (isLoading) return <div>Loading...</div>;

    // Fetch lead details

    const isAdmin = principal?.role === 'admin'

    console.log({ isAdmin });
    console.log('delete', id);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const deleteLead = useDeleteLead();
    
    // Handle lead deletion
    const handleDelete = () => {

        if (isAdmin && id) {
            deleteLead.mutate(id!);
            navigate('/lead-management')
        } else {

            toast.error('You do not have permission to delete leads');

            navigate('/lead-management'); // Redirect to the dashboard after deletion
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
                    Are you sure you want to delete the lead <strong>user:{leadData?.leadName}</strong>?
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col space-y-4">
                    <div>
                        <p><strong>Lead Name:</strong> {leadData?.leadName}</p>
                        <p><strong>Contact Number:</strong> {leadData?.contactNumber}</p>
                        <p><strong>Email:</strong> {leadData?.email}</p>
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
