
import LeadManagementForm from "@/components/lead-management/LeadManagementForm"
import { useGetLead } from "@/services/query/lead.management.query";
import { useParams } from "react-router-dom";

const EditLead = () => {
  const { leadId } = useParams();
const { data: leadData, isLoading } = useGetLead(leadId!);

if (isLoading) return <div>Loading...</div>;


  return (
    <div>
      <LeadManagementForm leadId={leadId} initialData={leadData} />
    </div>
  )
}

export default EditLead