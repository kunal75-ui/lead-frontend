import { useAuthentication } from '@/hooks/useAuthentication';
import { Button } from '../ui/button';
import UserActionMenu from './UserActionMenu';
import { BellIcon } from '@radix-ui/react-icons';

const Header = () => {
    const { principal } = useAuthentication();
    return (
        <header className="w-full border-b drop-shadow-xl border-input bg-background sticky">
            <div className="flex items-center justify-between wrapper-navbar">
                <div>
                    <h2 className="h2-bold-16 text-primary">{principal?.name}</h2>
                </div>
                <nav className="hidden w-full max-w-xs md:flex-between">{/* <NavItem /> */}</nav>
                <div className="flex justify-end w-32 gap-3">

                    <Button asChild className="p-2 rounded-full" size="icon" variant="ghost">
                        <BellIcon />
                    </Button>

                    <UserActionMenu />
                    {/* </SignedOut> */}
                </div>
            </div>
        </header>
    );
};

export default Header;
