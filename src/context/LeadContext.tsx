// src/context/LeadContext.tsx
import { createContext, useState, useContext, ReactNode } from 'react';;
import { getAllLeads } from '../services/api/lead.api';

interface LeadContextType {
  leads: any[];
  fetchLeads: (params?: any) => void;
}

const LeadContext = createContext<LeadContextType | undefined>(undefined);

export const LeadProvider = ({ children }: { children: ReactNode }) => {
  const [leads, setLeads] = useState<any[]>([]);

  const fetchLeads = async () => {
    try {
        
        const response = await getAllLeads()
        setLeads(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
        console.error(error);
        setLeads([]);
        
    }
   
  };

  return (
    <LeadContext.Provider value={{ leads, fetchLeads }}>
      {children}
    </LeadContext.Provider>
  );
};

export const useLeads = () => {
  const context = useContext(LeadContext);
  if (context === undefined) throw new Error("LeadContext must be used within LeadProvider");
  return context;
};
