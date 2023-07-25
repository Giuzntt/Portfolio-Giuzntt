import { cn } from "./../../lib/utils";

interface BadgeProps {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const Badge = ({ icon, children, className }: BadgeProps) => {
  return (
    <span
      className={cn(
        "flex items-center gap-2 px-2 py-1 text-sm font-medium text-gray-50 bg-cornflower-blue rounded-full dark:bg-neutral-800 dark:text-neutral-50",
        className
      )}
    >
      {icon}
      {children}
    </span>
  );
};

export default Badge;
