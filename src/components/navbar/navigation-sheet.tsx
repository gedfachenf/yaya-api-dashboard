import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { NavItemI } from "@/interfaces/app";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface NavigationSheetProps {
  navItems: NavItemI[];
}

export const NavigationSheet = ({ navItems }: NavigationSheetProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-full max-w-[320px] p-6 space-y-2">
        <SheetHeader>
          <SheetTitle>
            <VisuallyHidden>Navigation</VisuallyHidden>
          </SheetTitle>
        </SheetHeader>

        {/* Logo */}
        <Logo asLink />

        {/* Navigation Items */}
        <nav className="space-y-2">
          <Accordion type="single" collapsible className="w-full">
            {navItems.map((navItem) =>
              !navItem.children ? (
                <Link
                  key={navItem.title}
                  href={navItem.href || "#"}
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted transition-colors"
                >
                  {navItem.title}
                </Link>
              ) : (
                <AccordionItem key={navItem.title} value={navItem.title}>
                  <AccordionTrigger className="px-3 py-2 text-base font-medium text-foreground hover:bg-muted rounded-md">
                    {navItem.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-1">
                      {navItem.children.map((item) => (
                        <li key={item.title}>
                          <Link
                            href={item.href || "#"}
                            className="flex items-center px-3 py-2 rounded-md hover:bg-muted text-sm text-foreground transition-colors"
                          >
                            {item.icon && (
                              <item.icon className="w-5 h-5 mr-3 text-muted-foreground" />
                            )}
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              )
            )}
          </Accordion>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
