import React, { useContext, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { SidebarContext } from '@/context/sidebar.context';
import { useAuthentication } from '@/hooks/useAuthentication';
import { ChevronLeftIcon, DotsVerticalIcon } from '@radix-ui/react-icons';

import { Button } from '../ui/button';

type SidebarProps = {
    children: React.ReactNode;
};
type SidebarItemProps = {
    name?: string;
    icon?: React.ReactElement;
    alert?: boolean;
    href: string;
};

const Sidebar: React.FunctionComponent<SidebarProps> = ({ children }) => {
    const { principal } = useAuthentication();
    // console.log({principal});
    
    const { pathname } = useLocation();
    const [expanded, setexpanded] = useState(true);
    return (
        <aside className="h-screen border border-l drop-shadow-xl bg-background border-input  overflow-hidden">
            <nav className="flex flex-col h-full shadow-sm ">
                <div className="gap-2 p-4 flex-between">
                    <img src="https://img.logoipsum.com/330.svg" className={`overflow-hidden transition-all ${expanded ? 'w-32' : 'w-0'}`} alt="logo" />
                    <Button variant="ghost" className="rounded-lg p-1.5" size="icon" onClick={() => setexpanded((curr) => !curr)}>
                        <ChevronLeftIcon className="size-10" />
                    </Button>
                </div>
                <SidebarContext.Provider value={{ expanded, location: pathname }}>
                    <ul className="flex-1 px-4">{children}</ul>
                </SidebarContext.Provider>
                <div className="flex gap-3 p-4 border-t flex-between">
                    <img src="https://ui-avatars.com/api/?bold=true" alt="user_picture" className="p-1 border rounded-full size-11 border-primary" />
                    <div className={`flex-between overflow-hidden transition-all ${expanded ? 'w-52' : 'w-0'}`}>
                        <div className="flex flex-col justify-center gap-1">
                            <h4 className="p-semibold-16 text-primary">{principal?.name}</h4>
                            <span className="text-gray-500 p-regular-14">{principal?.email}</span>
                        </div>
                        <Button variant="ghost" className="rounded-lg p-1.5 " size="icon">
                            <DotsVerticalIcon className="size-6" />
                        </Button>
                    </div>
                </div>
            </nav>
        </aside>
    );
};

export const SidebarItem: React.FunctionComponent<SidebarItemProps> = ({ icon, name, alert = false, href = '/' }) => {
    const { expanded, location } = useContext(SidebarContext);
    let active = href.endsWith(location);
    return (
        <NavLink
            to={href}
            className={`relative flex items-center p-4 my-1.5 font-medium leading-4 transition-colors  rounded 
            ${active ? 'bg-primary text-primary-foreground' : 'hover:bg-primary/20'} 
            group`}
        >
            {icon}
            <span className={`overflow-hidden transition-all p-regular-16 ${expanded ? 'ml-3 w-52' : 'hidden'}`}>{name}</span>
            {alert && <div className={`absolute rounded size-2 bg-primary right-3 ${expanded ? '' : 'top-3'}`}></div>}
            {!expanded && <div className="sidemenu__tooltip">{name}</div>}
        </NavLink>
    );
};

export default Sidebar;
