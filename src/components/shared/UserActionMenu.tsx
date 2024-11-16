import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useLogout } from '@/services/query/auth.query';
import { DotsVerticalIcon, LockClosedIcon, PersonIcon } from '@radix-ui/react-icons';

import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

const UserActionMenu = () => {
    const { mutate } = useLogout();
    const navigate = useNavigate();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button asChild size="icon" variant="ghost" className="p-2 rounded-full hover:shadow-lg">
                    <DotsVerticalIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-background">
                <DropdownMenuItem onClick={() => navigate('/profile')} className="p-3">
                    <PersonIcon className="mr-2 w-4 h-4" />
                    <span>My Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => mutate()} className="p-3">
                    <LockClosedIcon className="mr-2 w-4 h-4" />
                    <span>Sign Out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserActionMenu;
