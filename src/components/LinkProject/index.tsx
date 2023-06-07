import Link from "next/link";
import NextLink from "next/link";
import { ComponentProps } from "react";
import { cn } from "./../../lib/utils";

type LinkProps = ComponentProps<typeof NextLink>;

export const LinkProject = ({ children, className, ...props }: LinkProps) => {
  return (
    <Link
      className={cn(
        " flex items-center gap-3 font-medium text-sm text-gray-500 hover:text-cornflower-blue transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
