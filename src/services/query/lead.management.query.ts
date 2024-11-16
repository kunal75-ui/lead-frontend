import {  useMutation, useQuery } from "@tanstack/react-query";
import { createLead, deletedLead, getAllLeads, getLead, updatedLead } from "../api/lead.api";
import { toast } from "react-toastify";
import { ILead } from "@/types";



export function useLeads() {
    return useQuery({
        queryKey: ['Leads'],
        queryFn: getAllLeads,
    });
};

export function useGetLead(leadId:string){
    
    return useQuery({
        queryKey: ['Leads',leadId],
        queryFn:()=> getLead,
        // onError : (error, variables, context) => {
        //     toast.error('Error while get lead ')
        // },
        // onSuccess: (data, variables, context) => {
        //     toast.success('Successfully get  lead role')
        // },
        
    })
}


export function useAddLead(){
    
    return useMutation({
        mutationFn: createLead,
        mutationKey: ['Leads'],
        onError : (error, variables, context) => {
            // An error happened!
            console.log(`rolling back optimistic `);
            toast.error('Error while creating lead role')
        },
        onSuccess: (data, variables, context) => {
            toast.success('Successfully created lead role')
        },
        
    })
}

export function useUpdateLead(){
    
    return useMutation({
        mutationFn: updatedLead,
        mutationKey: ['Leads'],
        onError : (error, variables, context) => {
            // An error happened!
            console.log(`rolling back optimistic `);
            toast.error('Error while update lead role')
        },
        onSuccess: (data, variables, context) => {
            toast.success('Successfully update lead role')
        },
        
    })
}

export function useDeleteLead(){
    
    return useMutation({
        mutationFn: deletedLead,
        onError : (error, variables, context) => {
            // An error happened!
            console.log(`rolling back optimistic `);
            toast.error('Error while delete lead role')
        },
        onSuccess: (data, variables, context) => {
            toast.success('Successfully delete lead role')
        },
        
    })
}