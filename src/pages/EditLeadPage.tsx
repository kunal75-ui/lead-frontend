
import LeadForm from "@/components/lead-management/LeadForm";
import { useGetLead } from "@/services/api/lead.api";
// import LeadManagementForm from "@/components/lead-management/LeadManagementForm"
// import { useGetLead } from "@/services/query/lead.management.query";
import { useParams } from "react-router-dom";

const EditLead = () => {
  const { id } = useParams();
const { data: leadData, isLoading } = useGetLead(id!)

if (isLoading) return <div>Loading...</div>;


  return (
    <div>
      {/* <LeadManagementForm leadId={leadId} initialData={leadData} /> */}
      <LeadForm initialData={leadData} isEditing={true} />
    </div>
  )
}

export default EditLead