import { cn } from "@/lib/utils";

export type CMSIconProps = {
  className?: string;
  icon: string;
};

export const CMSIcon = ({ className, icon }: CMSIconProps) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: icon }}
      className={cn(
        "text-4xl text-gray-50 cursor-pointer hover:text-gray-950 transition-all duration-200",
        className
      )}
    />
  );
};
