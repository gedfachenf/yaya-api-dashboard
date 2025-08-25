import { AppSidebar } from "@/components/layout/app-sidebar";
import KBar from "@/components/kbar";
import AppHeader from "@/components/layout/app-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { UsersProvider } from "@/contexts/User-context";
import { UserI } from "@/interfaces/user";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user: UserI = {
    firstName: "John Doe",
    email: "v1O7y@example.com",
    id: 1,
  };
  return (
    <UsersProvider user={user} grantedPrivileges={[]}>
      <KBar>
        <SidebarProvider>
          <AppSidebar user={user} />
          <SidebarInset>
            <AppHeader />
            {/* page main content */}
            {children}
            {/* page main content ends */}
          </SidebarInset>
        </SidebarProvider>
      </KBar>
    </UsersProvider>
  );
}
