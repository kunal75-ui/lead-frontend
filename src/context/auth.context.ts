// import { createContext, useState, ReactNode, useContext } from 'react';

// interface AuthContextType {
//   isAuthenticated: boolean;
//   token: string | null;
//   signup: (token: string) => void;
//   login: (token: string) => void;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [token, setToken] = useState<string | null>(null);

//   const signup = (token: string) => {
//     setIsAuthenticated(true);
//     setToken(token);
//     localStorage.setItem('token', token);
//   };


//   const login = (token: string) => {
//     setIsAuthenticated(true);
//     setToken(token);
//     localStorage.setItem('token', token);
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//     setToken(null);
//     localStorage.removeItem('token');
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, token,signup, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error('useAuth must be used within AuthProvider');
//   return context;
// };


// import { createContext, useState, useEffect, ReactNode, useContext } from 'react';
// import { IUser } from '@/types';
// import { useLeads } from '@/services/query/lead.management.query';

// // Define the context type to handle user, token, and authentication actions
// interface AuthContextType {
//   user: IUser | null;
//   isAuthenticated: boolean;
//   token: string | null;
//   signup: (user: IUser, token: string) => void;
//   login: (user: IUser, token: string) => void;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<IUser | null>(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [token, setToken] = useState<string | null>(null);

//   const { data } = useLeads();

//   useEffect(() => {
//     // Load token from localStorage and authenticate
//     const savedToken = localStorage.getItem('token');
//     if (savedToken) {
//       setToken(savedToken);
//       setIsAuthenticated(true);
//       setUser(data?.data ?? null);
//     }
//   }, [data]);

//   const signup = (user: IUser, token: string) => {
//     setIsAuthenticated(true);
//     setToken(token);
//     setUser(user);
//     localStorage.setItem('token', token);
//   };

//   const login = (user: IUser, token: string) => {
//     setIsAuthenticated(true);
//     setToken(token);
//     setUser(user);
//     localStorage.setItem('token', token);
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//     setToken(null);
//     setUser(null);
//     localStorage.removeItem('token');
//   };

//   return (
//     <AuthContext.Provider value={{ user, isAuthenticated, token, signup, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error('useAuth must be used within AuthProvider');
//   return context;
// };
import { createContext } from 'react';
import { AuthenticationContextState } from './provider/Authentication.provider';

const defaultAuthenticationContext:AuthenticationContextState = {
    principal : null,
    isAuthenticated : false,
    setPrincipal : () => null,
}
const AuthenticationContext = createContext<AuthenticationContextState>(defaultAuthenticationContext);

export default AuthenticationContext;

