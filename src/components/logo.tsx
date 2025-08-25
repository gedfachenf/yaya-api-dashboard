import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LogoProps {
  className?: string;
  asLink?: boolean;
  iconType?: "icon-only" | "colored-transparent" | "colored-bg" | "white";
}

export const Logo: React.FC<LogoProps> = ({
  className,
  iconType = "colored-transparent",
  asLink = false,
}) => {
  const source = {
    "icon-only": "/logo-only.png",
    "colored-transparent": "/logo-only.png",
    "colored-bg": "/logo-only.png",
    white: "/logo-only.png",
  }[iconType];

  if (!asLink) {
    return (
      <div>
        <Image
          src={source}
          alt="logo"
          width={200}
          height={200}
          className={cn("w-40", className)}
        />
      </div>
    );
  }

  return (
    <Link prefetch href={"/"}>
      <Image
        src={source}
        alt="logo"
        width={200}
        height={200}
        className={cn("w-40", className)}
      />
    </Link>
  );
};
