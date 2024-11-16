import { useContext } from 'react';

import AuthenticationContext from '@/context/auth.context';

export const useAuthentication = () => {
    const context = useContext(AuthenticationContext);

    if (context === undefined) throw new Error('useAuthentication must be used within a AuthenticationProvider');

    return context;
};
