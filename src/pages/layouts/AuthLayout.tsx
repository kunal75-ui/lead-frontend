import { Outlet } from 'react-router-dom';

const AuthPageLayout = () => {
    return (
        <div className="flex h-[100vh]">
            <div className="flex-1 bg-login-screen relative">
                <div>
                    <img src="https://img.logoipsum.com/330.svg" className="overflow-hidden transition-all w-32 h-32" alt="logo" />
                </div>
                <div id="overlay" className="w-full h-full absolute login-overlay top-0 left-0 opacity-30" />
            </div>

            <div className="flex-1">
                <div className="h-full mx-auto flex w-1/2 flex-col justify-center space-y-6 items-center">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AuthPageLayout;
