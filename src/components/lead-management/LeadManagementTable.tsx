import { useLeads } from '@/services/query/lead.management.query';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ILead } from '@/types';


const LeadManagementTable = () => {
    const navigate = useNavigate();
    const { data: leads, isLoading } = useLeads()


    const handleDelete = async (id: string) => {
        navigate(`delete-lead/${id}`)

    };

    const handleEdit = (id: string) => {
        navigate(`/edit-lead/${id}`);
    };

    const handleAddNew = () => {
        navigate('/create');
    };

    if (isLoading) {
        return <div>Loading...</div>
    }


    return (
        <Card>
            <CardHeader>
                <CardTitle>Leads Management</CardTitle>
                <div className="flex-between">
                    <Button onClick={handleAddNew} className="rounded" size={'sm'}>Add New Lead</Button>
                </div>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-center">Lead Name</TableHead>
                            <TableHead className="text-center">Contact</TableHead>
                            <TableHead className="text-center">Email</TableHead>
                            <TableHead className="text-center">Status</TableHead>
                            <TableHead className="text-center">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {leads?.content?.map((lead: ILead) => (
                            <TableRow key={lead._id}>
                                <TableCell className="text-center">{lead.leadName}</TableCell>
                                <TableCell className="text-center">{lead.contactNumber}</TableCell>
                                <TableCell className="text-center">{lead.email}</TableCell>
                                <TableCell className="text-center">{lead.status}</TableCell>
                                <TableCell className="text-center">
                                    <Button onClick={() => handleEdit(lead._id)} className="mr-2">Edit</Button>
                                    <Button variant="destructive" onClick={() => handleDelete(lead._id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default LeadManagementTable;
