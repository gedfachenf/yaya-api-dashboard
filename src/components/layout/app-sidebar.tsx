"use client";
import { NavUser } from "@/components/layout/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavBar } from "./nav-bar";
import { UserI } from "@/interfaces/user";
import { Logo } from "../logo";
import Link from "next/link";
import { Globe2Icon } from "lucide-react";

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  user: UserI;
}

export function AppSidebar({ user, ...props }: AppSidebarProps) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <div className="flex justify-end">
                <Link href="/app" className="flex w-full items-center gap-4">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                    <Logo iconType="icon-only" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">YaYa Wallet</span>
                    <span className="truncate text-xs">app</span>
                  </div>
                </Link>

                <Link href="/" className="text-sidebar-primary">
                  <Globe2Icon />
                </Link>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavBar />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
