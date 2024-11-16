import { IUser } from '@/types';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { useMemo } from 'react';

export const useSession = () => {
    const getAuthToken = (): string | undefined => {
        return Cookies.get('auth');
    };
    const authToken = getAuthToken();

    const loggedInUser: IUser | null = useMemo(() => {
        if (authToken) {
            const loggedInUser = jwtDecode(authToken);
            if (loggedInUser) {
                return loggedInUser as IUser;
            }
        }
        return null;
    }, [authToken]);

    return loggedInUser;
};
