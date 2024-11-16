import { Watch } from 'react-loader-spinner';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthentication } from '@/hooks/useAuthentication';
import SignupForm from '@/components/auth/SignupForm';

const SignupPage = () => {
    let session = false;
    const { isAuthenticated } = useAuthentication();
    const navigate = useNavigate();
    const { state: locationState } = useLocation();
    const redirect = locationState?.redirectTo || '/dashboard';
    if (isAuthenticated) {
        session = true;
        setTimeout(() => {
            navigate(redirect);
        }, 1000);
    }
    if (session) {
        return <Watch visible={true} height="80" width="80" radius="48" color="#4fa94d" ariaLabel="watch-loading" />;
    }
    return (
        <>
            <div className="flex flex-col space-y-2 text-center">
                <h1 className="h5-bold">Create Your an account !</h1>
                <p className="text-sm text-muted-foreground">Enter Details below to create your account</p>
            </div>

            <SignupForm redirectUrl={redirect} className="w-full"  />
        </>
    );
};

export default SignupPage;
