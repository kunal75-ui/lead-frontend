import { createContext } from 'react';

const initialState = {
    expanded : true,
    location:''
}
export const SidebarContext = createContext(initialState);