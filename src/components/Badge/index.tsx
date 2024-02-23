import { ComponentProps } from "react";
import { CMSIcon } from "../cms-icon";
import { cn } from "./../../lib/utils";
import { motion } from "framer-motion";

type BadgeProps = ComponentProps<typeof motion.span> & {
  icon: string;
  children?: React.ReactNode;
  className?: string;
};

const Badge = ({ icon, children, className, ...props }: BadgeProps) => {
  return (
    <motion.span
      className={cn(
        "flex items-center gap-2 px-2 py-1 text-sm font-medium text-gray-50 bg-cornflower-blue rounded-full dark:bg-neutral-800 dark:text-neutral-50",
        className
      )}
      {...props}
    >
      <CMSIcon icon={icon} />

      {children}
    </motion.span>
  );
};

export default Badge;
