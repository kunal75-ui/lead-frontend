import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useAuthentication } from '@/hooks/useAuthentication';
import HomeLayout from '@/pages/layouts/HomeLayout';

const PrivateRoutes = () => {
    const { isAuthenticated, } = useAuthentication();
    const location = useLocation();

    return isAuthenticated ? (
        <HomeLayout>
            <Outlet />
        </HomeLayout>
    ) : (
        <Navigate to="/login" replace state={{ from: location }} />
    );
};

export default PrivateRoutes;
