'use client';

import * as React from 'react';
import Link from 'next/link';
import {
    BarChartIcon,
    ClipboardListIcon,
    FileIcon,
    FolderIcon,
    LayoutDashboardIcon,
    ListIcon,
    UsersIcon,
} from 'lucide-react';

import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { useAuth } from '@/lib/auth/AuthContext';
import Logo from '@/components/ui/Logo';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';

const data = {
    navMain: [
        {
            title: 'Dashboard',
            url: '/dashboard',
            icon: LayoutDashboardIcon,
        },
        {
            title: 'Jobs',
            url: '/jobs',
            icon: ListIcon,
        },
        {
            title: 'Internships',
            url: '/internships',
            icon: BarChartIcon,
        },
        {
            title: 'Applications',
            url: '/applications',
            icon: FolderIcon,
        },
        {
            title: 'Community',
            url: '/community',
            icon: UsersIcon,
        },
        {
            title: 'Resume Builder',
            url: '/resume-builder',
            icon: FileIcon,
        },
        {
            title: 'Saved Jobs',
            url: '/saved-jobs',
            icon: ClipboardListIcon,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const auth = useAuth();
    const authUser = auth?.user;
    const sidebarUser = {
        name:
            [authUser?.firstName, authUser?.lastName].filter(Boolean).join(' ').trim() ||
            authUser?.email?.split('@')[0] ||
            'Administrator',
        email: authUser?.email || '',
        avatar: '',
    };
    return (
        <Sidebar
            collapsible="offcanvas"
            className="bg-white border-r border-gray-200 shadow-sm"
            {...props}
        >
            <SidebarHeader className="bg-white border-b border-gray-200 px-4 py-3">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="data-[slot=sidebar-menu-button]:!p-0 hover:bg-transparent"
                        >
                            <Link href="/" className="flex items-center gap-3">
                                <Logo className="h-10 w-auto" showLink={false} />
                                <span className="text-xl font-bold text-gray-900">X Career</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="bg-white px-3 py-4">
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter className="bg-gray-50 border-t border-gray-200 px-3 py-3">
                <NavUser user={sidebarUser} />
            </SidebarFooter>
        </Sidebar>
    );
}
