import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  label: string;
  href: string;
};

export const NavItem = ({ label, href }: NavItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={cn(
        "text-lg text-gray-50 transition-all duration-200 hover:text-opacity-80 relative",
        isActive && "text-gray-100 font-bold"
      )}
    >
      {label}
      {isActive && (
        <span className="bg-gray-100 absolute bottom-0  left-0 w-full h-0.5 hover:bg-opacity-80 transition-all duration-200 "></span>
      )}
    </Link>
  );
};
