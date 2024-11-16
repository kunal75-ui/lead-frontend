import { ILead } from "../../types";
import axiosInstance from "./axiosInstance";


const lead = 'leads'

export const createLead = async (data:ILead) => {
    const log = await axiosInstance.post(`${lead}`, data);
    return log.data
};

export const getAllLeads = async () => {
    const getLogs = await axiosInstance.get(`${lead}`);

    return getLogs.data
};

export const getLead = async (id:string): Promise<ILead |undefined> => {
    const getLog = await axiosInstance.get(`${lead}/${id}`);
    return getLog.data
}

export const updatedLead = async ({ id, data }: { id: string; data: ILead })=> {
    const updateLog = await axiosInstance.put(`${lead}/${id}`, data);
    return updateLog.data
}

export const deletedLead = async (id:string) => {
    const deleteLog = await axiosInstance.delete(`${lead}/${id}`,{});
    return deleteLog.data
}