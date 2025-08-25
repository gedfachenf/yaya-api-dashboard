import { NavItem } from "@/types";
import { ArrowLeftRight, LayoutDashboardIcon } from "lucide-react";

//Info: The following data is used for the sidebar navigation and Cmd K bar.
export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    url: "/app",
    icon: <LayoutDashboardIcon />,
  },
  {
    title: "Transactions",
    url: "/app/txn",
    icon: <ArrowLeftRight />,
  },
];
