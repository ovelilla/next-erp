"use client";
// Components
import { Sidebar } from "@/app/(protected)/layouts/dashboard/components/sidebar/sidebar.component";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ToggleTheme } from "@/app/(protected)/layouts/dashboard/components/toggle-theme/toggle-theme.component";
import { UserNav } from "@/app/(protected)/layouts/dashboard/components/user-nav/user-nav";
// Types
import { DashboardProps } from "@/app/(protected)/layouts/dashboard/types/dashboard.types";

const DashboardLayout = ({ children }: DashboardProps) => {
  return (
    <div className="flex flex-1">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center justify-end border-b bg-background px-4">
          <div className="flex gap-2">
            <SidebarTrigger />
            <ToggleTheme />
            <UserNav />
          </div>
        </header>

        <main className="flex flex-1 bg-background">{children}</main>
      </div>
    </div>
  );
};

export { DashboardLayout };
