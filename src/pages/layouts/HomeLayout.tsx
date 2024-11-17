import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import Sidebar, { SidebarItem } from '@/components/shared/Sidebar';
import { DashboardIcon, PersonIcon } from '@radix-ui/react-icons';

type HomeLayoutProps = {
    children: React.ReactNode;
};
const HomeLayout = ({ children }: HomeLayoutProps) => {
    return (
        <div className="flex">
            <Sidebar>
                <SidebarItem icon={<DashboardIcon className="size-5" />} name="Dashboard" href="/dashboard" />
                <SidebarItem icon={<PersonIcon className="size-5 " />} name="Lead Management" href="/lead-management" />
            </Sidebar>
            <div className="flex flex-col flex-1 h-screen">
                <Header />
                <div className="flex flex-col flex-1  gap-2 overflow-y-auto">
                    <main className="container flex-1 py-4">
                        <div className="h-full">{children}</div>
                    </main>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default HomeLayout;
