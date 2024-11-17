// import { ILeadFormData } from "@/schemas/LeadManagementSchema";
// import { ILead } from "../../types";
// import axiosInstance from "./axiosInstance";


// const lead = 'leads'

// export const createLead = async (data:ILead) => {
//     const log = await axiosInstance.post(`${lead}`, data);
//     return log.data
// };

// export const getAllLeads = async () => {
//     const getLogs = await axiosInstance.get(`${lead}`);

//     return getLogs.data
// };

// export const getLead = async (id:string): Promise<ILead |undefined> => {
//     const getLog = await axiosInstance.get(`${lead}/${id}`);
//     return getLog.data
// }

// export const updatedLead = async ({  data }: {  data: ILeadFormData })=> {
//     const updateLog = await axiosInstance.put<ILead>(`${lead}`, data);
//     return updateLog.data
// }

// export const deletedLead = async (id:string) => {
//     const deleteLog = await axiosInstance.delete(`${lead}/${id}`);
//     return deleteLog.data
// }

import { ILead, } from "@/types";
import axiosInstance from "./axiosInstance";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { ILeadFormData } from "@/schemas/LeadManagementSchema";

const leadEndpoint = "leads";

// API Utility Functions
export const createLead = async (data: ILeadFormData): Promise<ILead> => {
    const response = await axiosInstance.post(`${leadEndpoint}`, data);
    return response.data;
};

export const getAllLeads = async ()  => {
    const response = await axiosInstance.get(`${leadEndpoint}`);
    return response.data.content;
};

export const getLead = async (id: string) => {
    const response = await axiosInstance.get(`${leadEndpoint}/${id}`);
    return response.data.lead;
};

export const updatedLead = async ({
    id,
    data,
}: {
    id: string;
    data: ILeadFormData;
}) => {
    const response = await axiosInstance.put(`${leadEndpoint}/${id}`, data);
    return response.data
};

export const deletedLead = async (id: string): Promise<void> => {
    await axiosInstance.delete(`${leadEndpoint}/${id}`);
};

// React Query Hooks
export function useLeads() {
    return useQuery<ILead[], Error>({
        queryKey: ["leads"],
        queryFn: getAllLeads,
    });
}

export function useGetLead(leadId: string) {
    return useQuery<ILead>({
        queryKey: ["leads", leadId],
        queryFn: () => getLead(leadId),
    });
}

export function useAddLead() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createLead,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["leads"] });
            toast.success("Lead created successfully");
        },
        onError: () => toast.error("Failed to create lead"),
    });
}

export function useUpdateLead() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updatedLead,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["leads"] });
            toast.success("Lead updated successfully");
        },
        onError: () => toast.error("Failed to update lead"),
    });
}

export function useDeleteLead() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deletedLead,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["leads"] });
            toast.success("Lead deleted successfully");
        },
        onError: () => toast.error("Failed to delete lead"),
    });
}
