import { useState } from 'react';
import { useSession } from '@/hooks/useSession';

import AuthenticationProviderContext from '../auth.context';
import { IUser } from '@/types';

export type AuthenticationContextState = {
    principal : IUser | null, 
    isAuthenticated : boolean,
    setPrincipal: (authenticationPrincipal: IUser)=> void;
  }
export type AuthProviderProps = {
    children: React.ReactNode
  }
export function AuthenticationProvider({ children, ...props }: AuthProviderProps) {
    const sessionPrincipal = useSession();

    const [principal, setPrincipal] = useState<IUser>(sessionPrincipal as IUser);
    const value: AuthenticationContextState = {
        principal: sessionPrincipal,
        isAuthenticated: principal != null || principal != undefined,
       
        setPrincipal: (auth) => {
            setPrincipal(auth);
        },
    };

    return (
        <AuthenticationProviderContext.Provider value={value} {...props}>
            {children}
        </AuthenticationProviderContext.Provider>

        
    );
}