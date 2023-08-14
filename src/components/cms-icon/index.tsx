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
        "text-2xl text-gray-50 cursor-pointer  transition-all duration-200 mx-auto",
        className
      )}
    />
  );
};
